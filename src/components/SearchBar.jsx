import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faHouse } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export function SearchBar() {
	const [search, setSearch] = useState("")
	const navigate = useNavigate()
	const handleSearch = (e) => {
		e.preventDefault()
		navigate(`/products/search/${search}&page=1&limit=30`)
	}

	const icon = <FontAwesomeIcon icon={faSearch} style={{ color: "#fffff5" }} />
	const homeIcon = <FontAwesomeIcon icon={faHouse} style={{color: "#fffff5"}}/>

	return (
		<>
			<div>
				<form className="header-searchbar" onSubmit={handleSearch}>
					<a href="/">
						<button className="searchbar-button" type="button">
							{homeIcon}
						</button>
					</a>
					<input
						className="searchbar-input"
						type="search"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<button className="searchbar-button" type="submit">
						{icon}
					</button>
				</form>
			</div>
		</>
	)
}
