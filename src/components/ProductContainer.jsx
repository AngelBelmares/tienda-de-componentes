export function Product({ imageLink, name, stock, link}) {
  
  return (
    <article className="pd-container">
      <header className="pd-container-header">
        <img className="pd-container-image" src={imageLink} alt="" />
      </header>
      <h3 className="pd-container-name">{name}</h3>
      <span className="pd-container-stock">{stock}</span>
      <a className="pd-container-link" href="">{link}</a>
    </article>
  )
}