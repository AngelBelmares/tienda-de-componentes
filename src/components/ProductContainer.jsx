export function Product({ name, price, image, stock, link, store }) {
  return (
    <a className="pd-link" href={link} target="_blank">
      <article className="pd-container">
        <header className="pd-container-header">
          <img className="pd-container-image" src={image} alt="" />
        </header>
        <aside className="pd-container-info">
          <h3 className="pd-container-name">{name}</h3>
          <span className="pd-container-price">{price}</span>
          <span className={stock > 0 ? 'pd-container-avaiable' : 'pd-container-unavailable'}>
            {stock > 0 ? 'Disponible' : 'Agotado'}
          </span>	
          <span className="pd-container-store">{store}</span>
        </aside>
      </article>
    </a>
  );
}

export default Product