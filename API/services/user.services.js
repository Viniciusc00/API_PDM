const UserModel = require('../model/user.model');
const jwt = require ('jsonwebtoken');

const nodeMailer = require ('nodemailer')

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
    static async recoverpassword(email){
        try{        

            const transporter = nodeMailer.createTransport({
                host: "smtp.gmail.com", 
                port: 465, 
                secure: true, 
                auth: {
                    user: "fredcoq20@gmail.com", 
                    pass: "ludgayalkottxqrf", 
             
                },
            });
        
            const info = await transporter.sendMail({
                from: '"Gmail" <fredcoq20@gmail.com>',
                to : email,
                subject: 'testing, testinf',
                html : `
                <h1>Recupere sua Senha</h1>
                <p>No momento esta funcao esta indisponivel</p>
                `,
            });
            return true
        } catch (error){
            throw error;
        }
    }
    static async generateToken(tokenDate,secretKey,jwt_expire){
        return jwt.sign(tokenDate,secretKey,{expiresIn:jwt_expire});
    }
}


module.exports = UserServices;