import { ComponentModel } from '../models/component.js';

export class ComponentController {
  getAll = async (req, res) => {
    try {
      const categories = await ComponentModel.getAll();
      res.send(categories);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error interno del servidor');
    }
  }
  
  getByCategory = async (req, res) => {
    try{
      const { category } = req.params;
      const products = await ComponentModel.getByCategory({ category });
      res.send(products);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error interno del servidor');
    }
  }
}