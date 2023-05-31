import mahasiswa from "../models/mahasiswamodels.js";

export const getMahasiswa = async(req, res) =>{
    try {
        const response = await mahasiswa.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getMahasiswaById = async(req, res) =>{
    try {
        const response = await mahasiswa.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createMahasiswa = async(req, res) =>{
    try {
        await mahasiswa.create(req.body);
        res.status(201).json({msg: "mahasiswa Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateMahasiswa = async(req, res) =>{
    try {
        await mahasiswa.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "mahasiswa Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteMahasiswa = async(req, res) =>{
    try {
        await mahasiswa.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "mahasiswa Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}