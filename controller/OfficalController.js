const db = require('../db');

class OfficalController {
    async createOffical(req, res) {
        const { title, img, text, bdate } = req.body;
        const newOffical = await db.query(
            `INSER INTRO offical (title, img, text, bdate) VALUES($1, $2, $3, $4) RETURNING *`, [title, img, text, bdate]
        );
    }
    async getOffical(req, res) {
        const oneOffical = await db.query(`SELECT * FROM offical`);
        res.json(oneOffical.rows[0]);
    }
    async updateOffical(req, res) {
        const { title, img, text, bdate } = req.body;
        const updateOffical = await db.query(`UPDATE offical SET (title, img, text, bdate) VALUES($1, $2, $3, $4) RETURNING *`, [title, img, text, bdate]);
        res.json(updateOffical.rows[0]);
    }
    async deleteOffical(req, res) {
        const id = req.params.id;
        const deleteOffical = await db.query(`DELETE FROM offical WHERE id = $1`);
        res.json(deleteUser.rows[0]);
    }
};

module.exports = new OfficalController();