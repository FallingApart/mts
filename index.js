require('dotenv').config();
const fileUpload = require('express-fileupload');
const path = require('path');
const express = require('express');
const sequelize = require('./db')
const models = require('./models/models')
const app = express();
const PORT = process.env.PORT || 5000;
const router = require('./router/index');
const error = require('./middleware/ErrorMiddleware');


app.use(express.static(path.resolve(__dirname, 'static')));
app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router);

//Обработчик ошибок
app.use(error);

const startApp = async() => {
    try {
        sequelize.authenticate();
        sequelize.sync();
        
    } catch (e) {
        console.log(e);
    }
}
app.listen(PORT, () => console.log(PORT));
startApp();