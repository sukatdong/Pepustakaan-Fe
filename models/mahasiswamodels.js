import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const mahasiswa = db.define('mahasiswa',{
    nama: DataTypes.STRING,
    jurusan: DataTypes.STRING,
},{
    freezeTableName:true
});

export default mahasiswa;

(async()=>{
    await db.sync();
})();