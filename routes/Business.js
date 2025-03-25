const express = require('express');
const router = express.Router();
const protectRoute = require('../middleware/auth');
const Product = require('../Models/Products');  
const Order = require('../Models/Orders');


router.get('/revenues', protectRoute(['owner']), async (req, res) => {

    try {
      const today = new Date();
      today.setHours(23, 59, 59, 999); // Set the time to the end of the day

      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(today.getDate() - 30);
      thirtyDaysAgo.setHours(0, 0, 0, 0); // Set the time to the start of the day 30 days ago

      // Query to fetch records where the 'date' is within the last 30 days
      const query = {
        orderDate: { $gte: thirtyDaysAgo, $lt: today } // Match 'date' as Date objects
      };
      
      
  
      const result = await Order.find(query);
      
      
      const totalOrders = result.length;
      const pendingOrders = result.filter(order => order.status === 'pending').length;
      const deliveredOrders = result.filter(order => order.status === 'delivered').length;
      const totalRevenue = result.reduce((accumulator, order) => {
          return accumulator + order.totalPrice;
      }, 0);
      
      
      res.status(200).json({
          Revenue: totalRevenue,
          Orders: totalOrders,
          pending: pendingOrders,
          delivered: deliveredOrders
      });
      } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
      } 
});


router.get('/api/orders-by-month', protectRoute(['owner']), async (req, res) => {
  try {
  
    const ordersByMonth = await Order.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$orderDate" },
            month: { $month: "$orderDate" }
          },
          orders: { $push: "$$ROOT" },
          totalRevenue: { $sum: "$totalPrice" }
        }
      },
      {
        $sort: { "_id.year": 1, "_id.month": 1 } 
      }
    ]);

    res.json(ordersByMonth);
  } catch (error) {
    console.error("Error fetching orders by month:", error);
    res.status(500).json({ message: 'Server Error' });
  }
});



router.get('/best-selling-products', protectRoute(['owner']), async (req, res) => {
  try {
    // Step 1: Aggregate quantities of each product from the orders
    const aggregatedData = await Order.aggregate([
      { $unwind: '$details' },  // Unwind the details array to separate products
      {
        $group: {
          _id: '$details.productId',  // Group by productId
          totalQuantitySold: { $sum: '$details.quantity' }  // Sum up the quantities sold
        }
      },
      { $sort: { totalQuantitySold: -1 } },  // Sort by quantity sold in descending order
      { $limit: 5 }  // Get top 10 products
    ]);

    // Extract product IDs from the aggregated data
    const topProductIds = aggregatedData.map(item => item._id);

    // Step 2: Query the products collection to get details of these products
    const topProducts = await Product.find({ _id: { $in: topProductIds } });

    // Step 3: Combine the product details with the corresponding totalQuantitySold
    const productsWithSales = topProductIds.map(productId => {
      const product = topProducts.find(p => p._id.equals(productId));  // Find the product details by productId
      const salesData = aggregatedData.find(item => item._id.equals(productId));  // Find the corresponding sales data

      return {
        ...product.toObject(),  // Convert product document to plain object
        totalQuantitySold: salesData ? salesData.totalQuantitySold : 0  // Attach sales count
      };
    });

    // The productsWithSales will already be in descending order of totalQuantitySold
    res.status(200).json({ topProducts: productsWithSales });
  } catch (error) {
    console.error('Error fetching top-selling products:', error);
    res.status(500).json({ error: 'Failed to fetch top-selling products' });
  }
});



module.exports = router;