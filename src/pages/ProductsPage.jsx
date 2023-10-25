import React, { useEffect, useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import { Product } from "../components/ProductContainer"
import { BackgroundVideo } from "../components/BackgroundVideo"
import { SearchBar } from "../components/SearchBar"
import { PaginationBar } from "../components/PaginationBar"

export function ProductsPage() {
	const [products, setProducts] = useState([])
	const [totalItems, setTotalItems] = useState(0)
	const { category, search } = useParams()
	const location = useLocation()
	const searchParams = new URLSearchParams(location.search)
	const page = searchParams.get("page") || 1
	const limit = searchParams.get("limit") || 24

	useEffect(() => {
		let apiUrl = `http://localhost:3000/products/${category}?page=${page}&limit=${limit}`

		if (!category && !search) {
			apiUrl = `http://localhost:3000/products?page=${page}&limit=${limit}`
		} else if (search) {
			const searchQueryParam = search.replace(/ /g, "%")
			apiUrl = `http://localhost:3000/products/search?search=${searchQueryParam}&page=${page}&limit=${limit}`
		}

		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => {
				setProducts(data.components)
				setTotalItems(data.total)
			})
	}, [category, search, page, limit])

	const totalPages = Math.ceil(totalItems / limit)

	return (
		<>
			<BackgroundVideo />
			<header className="categories-header">
				<SearchBar />
			</header>

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

			<section>
				<PaginationBar
					totalPages={totalPages}
					currentPage={page}
				/>
			</section>
		</>
	)
}

export default ProductsPage
