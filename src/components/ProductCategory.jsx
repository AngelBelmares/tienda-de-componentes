export function Category({ name, href, imageSrc }) {
	return (
		<a className="ca-link" href={href}>
			<article className="ca-container">
				<header className="ca-container-header">
					<img className="ca-container-image" src={imageSrc} alt="" />
				</header>
				<span className="ca-container-name">{name}</span>
			</article>
		</a>
	)
}
