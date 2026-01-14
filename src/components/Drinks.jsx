import { menuData } from '../Data/MenuData'
import MenuItemCard from "./MenuItemCard";

export default function Drinks() {
  return (
    <div className="menu-grid">
      {menuData.drinks.map(item => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
