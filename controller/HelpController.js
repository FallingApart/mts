const {Help} = require('../models/models'); 

class HelpController { 
async createHelp(req, res) { 
const { title, input } = req.body; 
const newHelp = await Help.create( 
title, input 
); 
res.json(newHelp); 
} 
async getHelp(req, res) { 
const {id} = req.params; 
const oneHelp = await Help.findOne({ 
wehere: {id} 
}); 
res.json(oneHelp.rows[0]); 
} 
async updateHelp(req, res) { 
const { title, input } = req.body; 
const updateHelp = await Help.update({ 

}); 
res.json(updateHelp.rows[0]); 
} 
async deleteHelp(req, res) { 
const {id} = req.params; 
const deleteHelp = await Help.delete({ 
wehere: {id} 
}); 
res.json(deleteHelp.rows[0]); 
} 
}; 

module.exports = new HelpController();