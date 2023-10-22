import React from "react"
import { Category } from "../components/ProductCategory"

const categories = [
	{
		imageSrc:
			"https://cdn4.vectorstock.com/i/1000x1000/38/88/product-not-available-icon-vector-21743888.jpg",
		name: "Capacitores",
		href: "../Capactiores",
	},
	{
		imageSrc:
			"https://cdn4.vectorstock.com/i/1000x1000/38/88/product-not-available-icon-vector-21743888.jpg",
		name: "Circuitos Integrados",
		href: "../Circuitos Integrados",
	},
	{
		imageSrc:
			"https://cdn4.vectorstock.com/i/1000x1000/38/88/product-not-available-icon-vector-21743888.jpg",
		name: "Resistencias",
		href: "../Resistencias",
	},
	{
		imageSrc:
			"https://cdn4.vectorstock.com/i/1000x1000/38/88/product-not-available-icon-vector-21743888.jpg",
		name: "Componentes",
		href: "./Componentes",
	},
	{
		imageSrc:
			"https://cdn4.vectorstock.com/i/1000x1000/38/88/product-not-available-icon-vector-21743888.jpg",
		name: "Componentes",
		href: "./Componentes",
	},
	{
		imageSrc:
			"https://cdn4.vectorstock.com/i/1000x1000/38/88/product-not-available-icon-vector-21743888.jpg",
		name: "Componentes",
		href: "./Componentes",
	},
]

export function CategoriesPage() {
	return (
		<>
			<section className="category-grid">
				{categories.map((category) => {
					return (
						<Category
							key={category.name}
							name={category.name}
							href={category.href}
							imageSrc={category.imageSrc}
						/>
					)
				})}
			</section>
		</>
	)
}

export default CategoriesPage
