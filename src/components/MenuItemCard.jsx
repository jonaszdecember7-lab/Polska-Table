export default function MenuItemCard( {item} ) {
  return (
    <div className="menu-card">
    <img src={item.image} alt={item.name}/>
    <div className="menu-card-content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <span>£{item.price}</span>
    </div>
    </div>
  );
}
