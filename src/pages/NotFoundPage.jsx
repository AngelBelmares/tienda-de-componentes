import React from "react"
import { BackgroundVideo } from "../components/BackgroundVideo"
import { SearchBar } from "../components/SearchBar"

export function NotFoundPage() {
	return (
		<>
			<BackgroundVideo />

			<header className="categories-header">
				<SearchBar />
			</header>
			<section className="not-found-page">
				<h1>404</h1>
				<h2>Esta Página no Existe</h2>
			</section>
		</>
	)
}

export default NotFoundPage
