const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
                 
    productName:
        { 
        type: String,
         required: true 
    },          
    img: 
         {
         type: String,
         required: true
     },  
    price:
         {
         type: Number,
          required: true
     },              
    category:
        { 
        type: String,
         required: true 
    },            
    brand: 
        {
         type: String 
        
        },             
    description:
        { 
        type: String 
        
        },
    date: {
            type: Date,
            default: Date.now,
          },                   
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;