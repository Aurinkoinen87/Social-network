import s from './Navbar.module.css'





export function Navbar() {
    return (
        <nav>
        <ul className={s.nav_list} >
            <li><a href="#">Profile</a></li>
            <li><a href="#">Dialogs</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Settings</a></li>
        </ul>)
        </nav>
            )
}