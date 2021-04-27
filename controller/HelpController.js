const db = require('../db');

class HelpController {
    async createHelp(req, res) {
        const { title, input } = req.body;
        const newHelp = await db.query(
            `INSER INTRO help (title, input) VALUES($1, $2) RETURNING *`, [title, input]
        );
    }
    async getHelp(req, res) {
        const oneHelp = await db.query(`SELECT * FROM help`);
        res.json(oneHelp.rows[0]);
    }
    async updateHelp(req, res) {
        const { title, input } = req.body;
        const updateHelp = await db.query(`UPDATE help SET (title, input) VALUES($1, $2) RETURNING *`, [text, input]);
        res.json(updateHelp.rows[0]);
    }
    async deleteHelp(req, res) {
        const id = req.params.id;
        const deleteHelp = await db.query(`DELETE FROM help WHERE id = $1`);
    }
};

module.exports = new HelpController();