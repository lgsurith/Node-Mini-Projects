const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        price : {
            type : Number,
            required : true,
            default : 0
        },
        featured : {
            type : Boolean,
            required : true,
            default : false
        },
        rating : {
            type : Number,
            required : true,
            default : 4.5
        },
        createdAt : {
            type : Date,
            default : Date.now(),
        },
        //in realtime scenario a dropdown will be used hence
        company : {
            type : String,
            enum : {
                values : ['Ikea' , 'Decathlon' , 'Nike' , 'Adidas'],
                message : '{VALUE} is not supported'
            }    
        }
    }
);

const Product = mongoose.model("Products" , ProductSchema);
module.exports = Product;