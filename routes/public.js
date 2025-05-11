// app.get('/api/products/:id', async (req, res) => {
//     try {
//         const productId = req.params.id; 
//         const product = await Product.findById(productId); 
//         if (product) {
//             res.json(product); 
//         } else {
//             res.status(404).json({ message: 'Product not found' }); 
//         }
//     } catch (error) {
//         res.status(500).json({ message: error.message }); 
//     }
// });


// app.get('/api/products', async (req, res) => {
//     try {
//         const products = await Product.find(); 
//         res.json(products); 
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });