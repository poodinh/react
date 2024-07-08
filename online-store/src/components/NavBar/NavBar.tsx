//Assim importa-se imagens, costumam estar nos assets
import Logo from '../../assets/svg/logo.svg'
//importar modulo de css
import style from './NavBar.module.css'
//npm install --save-dev @iconify/react na pasta da online-store
import { Icon } from '@iconify/react';

// 1- criar uma função
function NavBar(){
    // 2- Obrigatório ter um return
    // {style["main-header"]} por causa do traço do meio do main-header
    // {style.logoWrapper} se não tiver hifen no meio
    // tmbm dá `${style.logoWrapper} ${style["main-header"]}` caso queiramos os dois no msm cenas
    return (
        <div className={style['main-header']}>
            <div className={`${style.logoWrapper}`}>
                <img src={Logo} alt="logo" />
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


/*  Espaço para os meus comentários :3
se se instalar a cena que ele falou na aula de 1/7 dá para ter atalho para criar a base do componente!!
podemos chamar na app enquanto trabalhamos nele para ir renderizando e vermos o que se está a passar




*/