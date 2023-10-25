import React from "react"

export function DistributorCard() {
	return (
		<>
			<article className="db-card">
				<img className="db-card-img" src="" alt="" />
				<aside className="db-card-info">
					<h3 className="db-card-title">Nombre del distribuidor</h3>
					<p className="db-card-location">Ubicación del distribuidor</p>
					<p className="db-card-schedule">Horario de atención</p>
					<p className="db-card-phone">Telefono del distribuidor</p>
					<p className="db-card-email">Correo del distribuidor</p>
					<p className="db-card-link">Pagina del Distribuidor</p>
				</aside>
			</article>
		</>
	)
}

export default DistributorCard
