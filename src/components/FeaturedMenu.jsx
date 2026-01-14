import { menuData } from '../Data/MenuData'
import MenuItemCard from "./MenuItemCard";

export default function FeaturedMenu() {
  return (
    <div className="menu-grid">
      {menuData.popular.map(item => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
