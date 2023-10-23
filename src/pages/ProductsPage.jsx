import React, { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { Product } from "../components/ProductContainer"

export function ProductsPage() {
	const [products, setProducts] = useState([])
	const { category } = useParams()
	
	useEffect(() => {
		let apiUrl = `http://localhost:3000/products/${category}`

		if (!category) {
			apiUrl = "http://localhost:3000/products"
		}
		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => {
				setProducts(data)
			})
	}, [category])

	return (
		<>
			<section className="products-grid">
				{products.map((product) => {
					return (
						<Product
							key={product.name}
							name={product.name}
							price={product.price}
							image={product.image}
							stock={product.stock}
							link={product.link}
							store={product.store}
						/>
					)
				})}
			</section>
		</>
	)
}

export default ProductsPage
