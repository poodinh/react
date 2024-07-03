//Assim importa-se imagens, costumam estar nos assets
import Logo from '../../assets/svg/logo.svg'
//importar modulo de css
import style from './NavBar.module.css'

// 1- criar uma função
function NavBar(){
    // 2- Obrigatório ter um return
    // {style["main-header"]} por causa do traço do meio do main-header
    // {style.logoWrapper} se não tiver hifen no meio
    // tmbm dá `${style.logoWrapper} ${style["main-header"]}` caso queiramos os dois no msm cenas
    return (
    <div className={style["main-header"]}> 
        <div className={style.logoWrapper}>
            <img src={Logo} alt="logo" />
        </div>
        <nav className="links-wrapper">
            <div className="main-menu">
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Content</li>
                    <li>Pages</li>
                </ul>
            </div>
            <div className="utility-menu">
                <ul>
                    <li><a href="#login"></a></li>
                    <li><a href="#register"></a>Register</li>
                    <li><a href=""></a>Search</li>
                    <li><a href=""></a>Cart</li>
                    <li><a href=""></a>Fav</li>
                </ul>
            </div>
        </nav>
    </div>)
}

//3- exportar o componente (função)
export default NavBar;



/*  Espaço para os meus comentários :3
se se instalar a cena que ele falou na aula de 1/7 dá para ter atalho para criar a base do componente!!
podemos chamar na app enquanto trabalhamos nele para ir renderizando e vermos o que se está a passar




*/