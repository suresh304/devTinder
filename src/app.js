require("./configs/config");
const express = require("express");
const connectDB = require("./configs/config");
const User = require("./models/user");
const { validateSignup } = require("./utils/validateSignup");
const { hash, compare } = require("bcrypt");
const user = require("./models/user");
const { userAuth } = require("./middlewares/auth");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(userAuth);

app.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const hashedPw = await hash(password, 10);
  const user = new User({ firstName, lastName, email, password: hashedPw });

  try {
    console.log(req.body);
    validateSignup(req);
    await user.save();
    res.status(200).send("User added successfully");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    res.send({ mesage: "invalid credentials" });
  }

  const isValidpw = await compare(password, user.password);
  if (!isValidpw) {
    res.status(400).send({ mesage: "invalid credentials" });
  } else {
    res.cookie("token", "hdfuiyherjnklhusirh", { expires: 0 });

    res.status(200).send({ mesage: "successfully loggged in" });
  }
});

app.get('/profile' , async (req,res)=>{
console.log(req.cookies)

res.send({"message":"cookie retrieved"})
})

connectDB()
  .then(() => {
    console.log("DB connected successfully");
    app.listen(3000, () => {
      console.log("server is listening at 3000");
    });
  })
  .catch((e) => console.log(e));
