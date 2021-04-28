const {GoodLink} = require('../models/models');

class GoodLinksController {
    async GoodLink(req, res) {
        const { text, link } = req.body;
        const newLink = await GoodLink.create({
            text, link
        });
        res.json(newLink);
    }

    async getGoodLinks(req, res) {
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
    }
};

module.exports = new GoodLinksController();