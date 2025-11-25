import './Header.css'
import { NavLink } from 'react-router-dom'


export default function Header() {
    return(
    <div className="Header">
        <h1>IKEA website</h1>
        <NavLink to="/furniture-list">Furniture list</NavLink> | <NavLink to="/add-furniture">Add furniture</NavLink>

    </div>
    )
}