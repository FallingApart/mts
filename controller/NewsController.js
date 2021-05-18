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

    async getoneNews(req, res) {
        const {id} = req.params;
        const oneNews = await News.findone({
            wehere: {id}
        });
        res.json(oneNews.rows[0]);
    }
    async updateNews(req, res) {
        const { img, text, bdate } = req.body;
        const updateNews = await News.update({
            
        });
        res.json(updateNews.rows[0]);
    }
    async deleteNews(req, res) {
        const {id} = req.params;
        const deleteNews = await News.delete({
            wehere:{id}
        });
        res.json(deleteNews.rows[0]);
    }
};

module.exports = new NewsController();