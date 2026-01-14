import { menuData } from '../Data/MenuData'
import MenuItemCard from "./MenuItemCard";

export default function Starters() {
  return (
    <div className="menu-grid">
      {menuData.starters.map(item => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
