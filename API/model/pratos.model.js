const mongoose = require('mongoose');
const db = require('../config/db');
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('C:/Users/vinic/Documents/IESB/API_PDM/API/model/pratos.json', 'utf-8'))

mongoose.connect('mongodb://127.0.0.1:27017/dBLaricao')

const {Schema} = mongoose;

const pratosSchema = new Schema({
        nome:{
            type: String,
            require: true
        },
        descricao:{
            type: String,
            required :true,
        },
        preco: {
            type : String,
            required: true
        },
        imagem: {
            type: String,
            required: true
        }
        
});

const Prato = mongoose.model('Prato', pratosSchema);
Prato.create(data)

const PratosModel = db.model ('pratos', pratosSchema);

module.exports = PratosModel;