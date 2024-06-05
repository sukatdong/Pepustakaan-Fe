import {Sequelize} from "sequelize";

const db = new Sequelize('perpustakaan','adminperpus','adminperpus',{
    host: '34.101.83.140',
    dialect: 'mysql'
});

export default db;