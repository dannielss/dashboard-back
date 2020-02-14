  
const mongoose = require('mongoose')

class ProductSchema {
    constructor() {
        return this.init();
    }

    init() {
        const ProductSchema = new mongoose.Schema ({
            image: String,
            title: String,
            price: Number,
            description: String,
        }, {
            toJSON: {
                virtuals: true,
            },
        });
        
        ProductSchema.virtual('image_url').get(function() {
            return `http://localhost:3333/files/${this.image}`
        })

        return ProductSchema;
    }
}


module.exports = mongoose.model('Product', new ProductSchema);