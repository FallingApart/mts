const {User, UserData} = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AppError = require('../error/AppError.js');
class UserController {
    async registration(req, res, next) {
        const {email, password, bdate, adress, name, surname, middlename} = req.body;
        if(!email || !password) {
            return next(AppError.badRequest('Не правильный email или пароль'));
        }
        const userCheck =  await User.findOne({
            where: {email}
        });
        if(userCheck) {
            return next(AppError.badRequest('Такой пользователь уже есть'));
        }
        const hashpassword = await bcrypt.hash(password, 7);
        const user = await User.create({
            email, password:hashpassword, bdate, adress, name, surname, middlename
        });
        const userData = UserData.create({userId: user.id});
        const token = jwt.sign({
            email, bdate, adress, name, surname, middlename            
        },
            process.env.SECRET_KEY,{expiresIn:'1h'}
        );
        return res.json({token});
    }

    async findOneUser (req, res){
        const {email, password} = req.params;
        const findOneUser = await User.findOne({
            where: {email}
        })
        res.json(findOneUser);
    }

    async getUser(req, res) {
        const {id} = req.params;
        const oneUser = await User.findone({
            wehere: {id}
        });
        res.json(oneUser.rows[0]);
    }
    async updateUser(req, res) {
        const { email, password, bdate, adress, gender, name, surname, midlename} = req.body;
        const updateUser = await User.update({

        });
        res.json(updateUser.rows[0]);
    }
    async deleteGoodLinks(req, res) {
        const {id} = req.params;
        const deleteUser = await User.delete({
            wehere:{id}
        });
        res.json(deleteUser.rows[0]);
    }
};

module.exports = new UserController();