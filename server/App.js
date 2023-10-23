import express from 'express';
import { ComponentController } from './controllers/components.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());

const componentController = new ComponentController()

app.get('/products', componentController.getAll)
app.get('/products/search', componentController.getBySearch)
app.get('/products/:category', componentController.getByCategory)


app.use((req, res) => {
  res.status(404).send('404: Page not found');
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}/`);
});