import logo from './../pics/logo-design.png'
import s from './Header.module.css'
import './../App.css';


export function Header() {
    return(
        <header>
        <img src={logo} alt="logo" className={s.logo}/>
        </header>
    )
}