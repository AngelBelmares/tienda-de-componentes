import express from 'express';
import { ComponentController } from './controllers/components.js';
import path from 'path';
import './esm-helpers.js'
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send("Hello World");
// });

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,  '../index.html'));
});

const componentController = new ComponentController()

app.get('/products', componentController.getAll)
app.get('/products/:category', componentController.getByCategory)


app.use((req, res) => {
  res.status(404).send('404: Page not found');
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}/`);
});