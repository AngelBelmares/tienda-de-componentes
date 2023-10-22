import mysql from 'mysql2/promise';

const DEFAULTCONFIG = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'root123',
  database: 'componentsdb',
}

const connectionString = process.env.DATABASE_URL ?? DEFAULTCONFIG

const connection = await mysql.createConnection(connectionString)

export class ComponentModel {
  static async getAll () {
    const [components] = await connection.query('SELECT name, price, image, stock, category, store, link FROM products')
    return components
  }

  static async getByCategory ({ category }) {
    const [components] = await connection.query('SELECT * FROM products WHERE category = ?', [category])
    return components
  }
}