const { DataTypes } = require('sequelize');
const sequelize = require('../db');


const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    bdate: { type: DataTypes.DATE },
    adress: { type: DataTypes.TEXT, allowNull: false },
    gender: { type: DataTypes.BOOLEAN },
    name: { type: DataTypes.STRING, allowNull: false },
    surname: { type: DataTypes.STRING, allowNull: false },
    midlename: { type: DataTypes.STRING, allowNull: false }
});
const News = sequelize.define('news', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    img: { type: DataTypes.STRING},
    text: { type: DataTypes.TEXT, allowNull: false },
    bdate: { type: DataTypes.DATE }
});
const GoodLink = sequelize.define('good_link', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    text: { type: DataTypes.TEXT, unique: false },
    link: { type: DataTypes.STRING, allowNull: false, unique: true }
});
const Help = sequelize.define('help', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    input: { type: DataTypes.TEXT, allowNull: false }
});
const Offical = sequelize.define('offical', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.TEXT, },
    img: { type: DataTypes.STRING, allowNull: false },
    text: { type: DataTypes.TEXT },
    bdate: { type: DataTypes.DATE }
});

const Role = sequelize.define('role', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    users: { type: DataTypes.INTEGER, allowNull: false },
    manager: { type: DataTypes.INTEGER, allowNull: false },
    admin: { type: DataTypes.INTEGER, allowNull: false }
});

User.hasMany(News);
News.belongsTo(User);

User.hasMany(GoodLink);
GoodLink.belongsTo(User);

User.hasMany(Help);
Help.belongsTo(User);

User.hasMany(Offical);
Offical.belongsTo(User);

User.hasMany(Role);
Role.belongsTo(User);

module.exports = {
    User,
    News,
    GoodLink,
    Help,
    Offical,
    Role
}