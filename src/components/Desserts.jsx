import { menuData } from '../Data/MenuData'
import MenuItemCard from "./MenuItemCard";

export default function Desserts() {
    return (
        <div className="menu-grid">
            {menuData.desserts.map(item => (
                <MenuItemCard key={item.id} item={item} />
            ))}
        </div>
    );
}
