const {User} = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
class UserController {
    async createUser(req, res) {
        const {email, password, bdate, adress, gender, name, surname, midlename} = req.body;
        const hashpassword = await bcrypt.hash(password, 7);
        const newUser = await User.create({
            email, password:hashpassword, bdate, adress, gender, name, surname, midlename
        });
        const token = jwt.sign({
            email, hashpassword, bdate, adress, gender, name, surname, midlename            
        },
            process.env.SECRET_KEY,{expiresIn:'1h'}
        );
        res.json(token);
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