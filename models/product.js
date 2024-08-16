const {model, Schema} = require('mongoose')

const ProductSchema = new Schema({
    nameProduct: {

        type: String,
        required:[true, 'The field name product is required'],
        minLength :[3, 'Min 3 characters'],
    },
    price: {
        type: Number,
        required:[true, 'The field name is required'],
        minLength :[5, 'Min 5 characters'],
    },
    weight: {
        type: Number,
        required:[true, 'The field number is required'],
    }
}) 

module.exports = model('Product',ProductSchema,'product')//primero define la clase, el segundo al nombre de la esquema, tercero nombre de la collection