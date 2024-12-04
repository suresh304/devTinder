const userAuth = (req,res,next)=>{
    const token = 'hdks'
    if(token == 'hdks'){
        next()
    }else{
        res.status(500).send("unauthorised request")
    }
}

module.exports = {userAuth}