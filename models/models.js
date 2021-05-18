const { DataTypes } = require('sequelize');
const sequelize = require('../db');


const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    bdate: { type: DataTypes.DATE},
    adress: { type: DataTypes.TEXT, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    surname: { type: DataTypes.STRING, allowNull: false },
    middlename: { type: DataTypes.STRING, allowNull: false },
    role: {type: DataTypes.STRING, defaultValue: 'user'}
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
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    manager: { type: DataTypes.STRING, allowNull: false, defaultValue: 'manager'},
    admin: { type: DataTypes.STRING, allowNull: false, defaultValue: 'admin'},
    volunteer: {type:DataTypes.STRING, allowNull: false, defaultValue: 'volunteer'}
});

const UserData = sequelize.define('user_data',{
id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
});

const DataZakaz = sequelize.define('data_zakaz',{
id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
});

const Zakaz = sequelize.define('zakaz',{
id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
type: {type: DataTypes.STRING, allowNull:false},
description: {type: DataTypes.STRING, allowNull:false},
media: {type:DataTypes.STRING, allowNull:false},
rtc: {type:DataTypes.STRING, allowNull:true}
});

const Status = sequelize.define('status',{
id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
done: {type: DataTypes.STRING, allowNull: false},
canceled: {type:DataTypes.STRING, allowNull:false},
moder_in: {type: DataTypes.STRING, allowNull:false},
work_in: {type: DataTypes.STRING, allowNull:false}
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

User.hasOne(UserData);
UserData.belongsTo(User);

UserData.hasMany(DataZakaz);
DataZakaz.belongsTo(UserData);

Zakaz.hasOne(DataZakaz);
DataZakaz.belongsTo(Zakaz);

Status.hasOne(Zakaz);
Zakaz.belongsTo(Status);

module.exports = {
User,
News,
GoodLink,
Help,
Offical,
Role,
UserData,
DataZakaz,
Zakaz,
Status
}
