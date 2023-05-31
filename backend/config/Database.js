import {Sequelize} from "sequelize";

const db = new Sequelize('perpustakaan','raja','raja',{
    host: '34.101.38.245',
    dialect: 'mysql'
});

export default db;