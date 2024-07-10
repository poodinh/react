// Assim importamos assets de imagem (SVG, JPEG, PNG)
import logoSVG from '../../assets/svg/logo.svg'
import style from './NavBar.module.css'

import { Icon } from '@iconify/react';

//1 - Criar uma função
function NavBar() {

    //2 - Obrigatorio ter um return
    return (
        <div className={style['main-header']}>
            <div className={`${style.logoWrapper}`}>
                <img src={logoSVG} alt="logo" />
            </div>

            <nav className={style.linksWrapper}>
                <div className={style.mainMenu}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Pages</a></li>
                    </ul>
                </div>
                <div className={style.utilityMenu}>
                    <ul>
                        <li className={style.loginLinks}><a className={style.linksWithIcons} href="#login">
                            <Icon icon="mdi:user-outline" height="2.4rem" /> Login</a>
                        </li>
                        <li><a href="#register">Register</a></li>
                        <li><a className={style.linksWithIcons} href="">Search</a></li>
                        <li><a className={style.linksWithIcons} href="">Cart</a></li>
                        <li><a className={style.linksWithIcons} href="">Fav</a></li>
                    </ul>
                </div>
            </nav>
        </div>)
}

//3 - Exportar o componente (funcao)
export default NavBar;