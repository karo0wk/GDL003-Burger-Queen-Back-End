var cors = require('cors')

module.exports = (app) => {
    const orders = require('../controllers/order.controllers');

    app.use(cors({credentials: true,}));
 
    // Create a new Order
    app.post('/orders', orders.create);

    // Retrieve all Orders
    app.get('/orders', orders.findAll);

    // Retrieve a single Order with orderId
    app.get('/orders/:orderId', orders.findOne);

    // Update a Order with orderId
    app.put('/orders/:orderId', orders.update);

    // Delete a Order with orderId
    app.delete('/orders/:orderId', orders.delete);
    
}