const {offical} = require('../models/models'); 

class OfficalController { 
async createOffical(req, res) { 
const { title, img, text, bdate } = req.body; 
const newOffical = await Offical.create( 
title, img, text, bdate 
); 
res.json(newOffical); 
} 
async getOffical(req, res) { 
const {id} = req.params; 
const oneOffical = await Offical.findOne({ 
wehere: {id} 
}); 
res.json(oneOffical.rows[0]); 
} 
async updateOffical(req, res) { 
const { title, img, text, bdate } = req.body; 
const updateOffical = await Offical.update({ 

}); 
res.json(updateOffical.rows[0]); 
} 
async deleteOffical(req, res) { 
const {id} = req.params; 
const deleteOffical = await Offical.delete({ 
wehere: {id} 
}); 
res.json(deleteOffical.rows[0]); 
} 
}; 

module.exports = new OfficalController();