const mongoose=require('mongoose')


const productSchema= new mongoose.Schema({
    name:{type:String,required:true,max:20},
    category:{type:String,required:true,max:100},
    price:{type:Number,required:true},
    stock:{type:Number,required:true,max:200},
    image:{type:String,required:true,max:200}
})


const Product = mongoose.model('products', productSchema);

module.exports = Product;