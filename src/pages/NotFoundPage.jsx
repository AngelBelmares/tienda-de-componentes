import React from "react"
import { BackgroundVideo } from "../components/BackgroundVideo"
import { SearchBar } from "../components/SearchBar"
import favicon from "../assets/images/favicon.jpg"

export function NotFoundPage() {
	return (
		<>
			<BackgroundVideo />

			<header className="categories-header">
				<a className="logo" href="/">
					<img src={favicon} alt="Logo" />
					<div className="name">
						<h2 className="mecatronic">Mecatronic</h2>
						<h2 className="components">Components</h2>
					</div>
				</a>
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
