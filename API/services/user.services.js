const UserModel = require('../model/user.model');
const jwt = require ('jsonwebtoken');

class UserServices {
    static async registerUser(nome,email,password){
        try {
                const createUser = new UserModel ({nome,email,password});
                return await createUser.save();
        }catch(err){
            throw err;
        }
    }
    static async checkuser(email){
        try {
            return await UserModel.findOne({email});
        } catch (error) {
            throw error;
        }
    }

    static async generateToken(tokenDate,secretKey,jwt_expire){
        return jwt.sign(tokenDate,secretKey,{expiresIn:jwt_expire});
    }
}


module.exports = UserServices;