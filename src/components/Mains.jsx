import { menuData } from '../Data/MenuData'
import MenuItemCard from "./MenuItemCard";

export default function Mains() {
  return (
    <div className="menu-grid">
      {menuData.mains.map(item => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
