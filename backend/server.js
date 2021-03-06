// Express server
import express from 'express';
import {data} from './data.js';
import {cartdata} from './cartdata.js';

const app = express();

//get product at that id
// app.get('/api/products/:id', (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// });

// Get list of products
app.get('/api/products', (req, res) => {
  res.send(data.products);
})

app.get('/', (req, res) => {
  res.send('Server is ready');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});