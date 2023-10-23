import { ComponentModel } from '../models/component.js';

export class ComponentController {
  getAll = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1
      const limit = parseInt(req.query.limit) || 30
      const categories = await ComponentModel.getAll(page, limit);
      res.json(categories);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error interno del servidor');
    }
  }
  
  getByCategory = async (req, res) => {
    try{
      const page = parseInt(req.query.page) || 1
      const limit = parseInt(req.query.limit) || 30 
      const { category } = req.params;
      const products = await ComponentModel.getByCategory(category, page, limit);
      res.json(products);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error interno del servidor');
    }
  }

  getBySearch = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1
      const limit = parseInt(req.query.limit) || 30
      const search = req.query.search.split('?')[0]
      const products = await ComponentModel.getBySearch(search, page, limit);
      res.json(products);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error interno del servidor');
    }
  }
}