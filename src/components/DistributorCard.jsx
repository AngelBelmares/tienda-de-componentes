import React from "react"

export function DistributorCard({distribuitorsInfo}) {
	const { name, location, locationUrl, schedule, image, url } = distribuitorsInfo
	const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = schedule;
	return (
		<>
			<article className="db-card">
				<a href={url} target="_blank" className="db-card-link">
					<img className="db-card-img" src={image} alt="" />
				</a>
				<aside className="db-card-info">
					<h3 className="db-card-title">{name}</h3>
					<a href={locationUrl} target="_blank" className="db-card-location">
						{location}
					</a>
					<ul className="db-card-schedule">
						{" "}
						<b>Horario de atención:</b>
						<li>{monday}</li>
						<li>{tuesday}</li>
						<li>{wednesday}</li>
						<li>{thursday}</li>
						<li>{friday}</li>
						<li>{saturday}</li>
						<li>{sunday}</li>
					</ul>
				</aside>
			</article>
		</>
	)
}

export default DistributorCard
