import React from "react"

export function PaginationBar({ totalPages, currentPage }) {
	const pageNumbers = []
	currentPage = parseInt(currentPage)

	if (totalPages <= 5) {
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(i)
		}
	} else if (
		totalPages > 5 &&
		currentPage >= 3 &&
		currentPage <= totalPages - 2
	) {
		for (let i = currentPage - 2; i <= currentPage + 2; i++) {
			pageNumbers.push(i)
		}
	} else if (totalPages > 5 && currentPage < 3) {
		for (let i = 1; i <= 5; i++) {
			pageNumbers.push(i)
		}
	} else if (totalPages > 5 && currentPage > totalPages - 2) {
		for (let i = totalPages - 4; i <= totalPages; i++) {
			pageNumbers.push(i)
		}
	}

	// Función para actualizar el número de página en la URL
	const updatePageInUrl = (newPage) => {
		const currentUrl = window.location.href
		const newUrl = currentUrl.replace(/page=\d+/, `page=${newPage}`)
		window.history.replaceState(null, "", newUrl)
	}

	return (
		<div className="pagination-bar">
			<ul className="pagination">
        <a className={currentPage > 1 ? 'first-page' : 'first-page-disabled'} href="#" onClick={() => updatePageInUrl(1)}>{'<<'}</a>
				<a className={currentPage > 1 ? 'previous-page' : 'previous-page-disabled'} href="#" onClick={() => updatePageInUrl(currentPage - 1)}>{'<'}</a>
				{pageNumbers.map((number) => (
					<li key={number} className={number === currentPage ? "active" : ""}>
						<a href="#" onClick={() => updatePageInUrl(number)}>
							{number}
						</a>
					</li>
				))}
				<a className={currentPage < totalPages ? 'next-page' : 'next-page-disabled'} href="#" onClick={() => updatePageInUrl(currentPage + 1)}>{'>'}</a>
				<a className={currentPage < totalPages ? 'last-page' : 'last-page-disabled'} href="#" onClick={() => updatePageInUrl(totalPages)}>{'>>'}</a>
			</ul>
		</div>
	)
}
