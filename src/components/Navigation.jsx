import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li><NavLink to="/" end className={({ isActive }) => isActive ? styles.active : undefined}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : undefined}>About</NavLink></li>
        <li><NavLink to="/experience" className={({ isActive }) => isActive ? styles.active : undefined}>Experience</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : undefined}>Contact</NavLink></li>
      </ul>
    </nav>
  )
}
