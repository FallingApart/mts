const {News} = require('../models/models');
const uuid = require('uuid');
const path = require('path');

class NewsController {
    async createNews(req, res) {
        const {text, bdate} = req.body;
        const {img} = req.files;
        let fileName = uuid.v4() + ".jpg";
        img.mv(path.resolve(__dirname, '..', 'static', fileName));
        const newNews = await News.create({
           img:fileName, text, bdate
        });
        res.json(newNews);
    }

    /*async getGoodLinks(req, res) {
        const {id} = req.params;
        const oneGoodLinks = await GoodLinks.findone({
            wehere: {id}
        });
        res.json(oneGoodLinks.rows[0]);
    }
    async updateGoodLinks(req, res) {
        const { text, link } = req.body;
        const updateGoodLinks = await GoodLinks.update({

        });
        res.json(updateGoodLinks.rows[0]);
    }
    async deleteGoodLinks(req, res) {
        const {id} = req.params;
        const deleteGoodLinks = await GoodLinks.delete({
            wehere:{id}
        });
        res.json(deleteUser.rows[0]);
    }*/
};

module.exports = new NewsController();