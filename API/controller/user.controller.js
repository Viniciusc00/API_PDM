const UserServices = require("../services/user.services");

exports.register = async(req,res,next) =>{
    try {
        const {nome,email,password} = req.body;
        const successRes = await UserServices.registerUser(nome,email,password);

        res.json ({status:true,success: "User Registered Successfully"});

    } catch (error) {
        throw error
    }
}

exports.login = async(req,res,next) =>{
    try {
        const {email,password} = req.body;


        const user = await UserServices.checkuser(email);



        if(!user)
        {
            return ("Esse user nao existe");
        }

        const isMatch = await user.comparePassword(password);

        if(isMatch == false){
            return ("Senha invalida");
        }

        let tokenDate = {_id:user._id,email:user.email};

        const token = await UserServices.generateToken(tokenDate,"secretKey",'1h');

        res.status(200).json({status:true,token:token});

    } catch (error) {
        throw error
    }
}