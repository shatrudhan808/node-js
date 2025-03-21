
const Product = require('../models/product.model.js');

// get product analytics

const getProductAnalytics = async (req, res) => {
    try {
        const result = await Product.aggregate([
            {
                $match: { inStock: true }
            },
            {
                $group: {
                    _id: null,
                    totalProducts: { $sum: 1 },
                    totalPrice: { $sum: '$price' },
                    averagePrice: { $avg: '$price' },
                    minPrice: { $min: '$price' },
                    maxPrice: { $max: '$price'}
                },
            },
            {
                $project: {
                    _id: 0,
                    totalProducts: 1,
                    totalPrice: 1,
                    averagePrice: 1,
                    minPrice: 1,
                    maxPrice: 1,
                    priceRange: {
                        $subtract: ['$maxPrice', '$minPrice']
                    }
                }
            }
        ]);
        res.status(200).json({success: true, data: result});

        
    } catch (error) {
        res.status(500).send(error);
    }
};

// get product stats

const getProductStats = async (req, res) => {
    try {
         const result = await Product.aggregate([
            // stage 1
            {
                $match: { inStock: true , price: { $gte: 500 } }
            } ,
            // stage 2
            {
                $group: {
                    _id: '$category',
                    averagePrice: { $avg: '$price' },
                    count :{ $sum: 1}
                },
            }
         ]);
        res.status(200).json({success: true, data: result});
            
        
    } catch (error) {
        res.status(500).send(error);
        
    }
}

const createSampleProduct = async (req, res) => {
    try {
        const product = [
            {
                name: 'Product 1',
                price: 100,
                category: 'Category 1',
                tags: ['tag1', 'tag2']
            },
            {
                name: 'Product 2',
                price: 200,
                category: 'Category 2',
                tags: ['tag2', 'tag3']
            },
            {
                name: 'Product 3',
                price: 300,
                category: 'Category 3',
                tags: ['tag3', 'tag4']
            },
            {
                name: 'Product 4',
                price: 400,
                category: 'Category 4',
                tags: ['tag4', 'tag5']
            },
            {
                name: 'Product 5',
                price: 500,
                category: 'Category 5',
                tags: ['tag5', 'tag6']
            },
        ]
        ;
       const result = await Product.insertMany(product); 
        res.status(201).json({success: true, message: 'Sample products created', data: ` inserted ${result.length} products`});
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { createSampleProduct, getProductStats, getProductAnalytics};