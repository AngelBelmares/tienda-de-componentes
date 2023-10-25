import mysql from "mysql2/promise"

const DEFAULTCONFIG = {
	host: "localhost",
	user: "root",
	port: 3306,
	password: "root123",
	database: "componentsdb",
}

const connectionString = process.env.DATABASE_URL ?? DEFAULTCONFIG

const connection = await mysql.createConnection(connectionString)

export class ComponentModel {
	static async getAll(page, limit) {
		const offset = (page - 1) * limit
		const [components] = await connection.query(
			"SELECT name, price, image, stock, category, store, link FROM products LIMIT ? OFFSET ?",
			[limit, offset]
		)
    const [total] = await connection.query("SELECT COUNT(*) FROM products")
    return { components, total: total[0]["COUNT(*)"] }
	}

	static async getByCategory(category, page, limit) {
		const offset = (page - 1) * limit
		const [components] = await connection.query(
			"SELECT * FROM products WHERE category = ? LIMIT ? OFFSET ?",
			[category, limit, offset]
		)
		const [total] = await connection.query(
			"SELECT COUNT(*) FROM products WHERE category = ?",
			[category]
		)
		return { components, total: total[0]["COUNT(*)"] }
	}

	static async getBySearch(search, page, limit) {
		const offset = (page - 1) * limit
		const [components] = await connection.query(
			"SELECT * FROM products WHERE name LIKE ? LIMIT ? OFFSET ?",
			[`%${search}%`, limit, offset]
		)
		const [total] = await connection.query(
			"SELECT COUNT(*) FROM products WHERE name LIKE ?",
			[`%${search}%`]
		)
		return { components, total: total[0]["COUNT(*)"] }
	}
}
