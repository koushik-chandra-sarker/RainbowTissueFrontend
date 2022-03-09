import React, {useState} from 'react';
import styles from "./Header.module.scss"
import classnames from 'classnames';
import ActiveLink from "../../ActiveLink";
import Preloader from "../../Preloader";
import {useSelector} from "react-redux";
import Link from "next/link";
const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const preloader = useSelector(store => store.preloader)
    function handleMenu(checked) {
        setOpenMenu(checked)
        if (openMenu) {
            document.body.style.overflow = 'auto'
        } else {
            document.body.style.overflow = 'hidden'
        }
    }

    function handleClose() {
        setOpenMenu(false)
        document.body.style.overflow = 'auto'
        document.getElementById("menu-icon").checked = false
    }

    return (

        <>
            { preloader.active ? <Preloader/> : <></> }
            <section className={classnames(styles.navbar, "display-flex justify-content-center align-items-center z-50")}>
                <input onChange={event => handleMenu(event.target.checked)} className={classnames(styles.menu_icon, )}
                       type="checkbox" id="menu-icon" name="menu-icon"/>
                <label htmlFor="menu-icon" />
                <Link href={"/"}>
                <div className={classnames(styles.logo, 'flex items-center cursor-pointer')}>
                    <img className={'sm:h-20 h-14'} src="static/image/logo-with-group.png" alt="Rainbow Tissue logo"/>
                    <div>
                        {/*<h4 className={'text-sm sm:text-xl text-primary font-extrabold'}>Rainbow</h4>*/}
                        <p className={'text-xs sm:text-base text-gray-600 sm:w-full w-32 italic'}>
                            Rainbow Group of Industries
                        </p>
                    </div>
                </div>
                </Link>
                <nav className={classnames(styles.nav, "display-flex z-50")}>
                    <div className={classnames(styles.nav_inner, 'display-flex')}>
                        <ul className={classnames("display-flex justify-content-center align-items-center")}>
                            <li onClick={handleClose}><ActiveLink activeClassName={styles.active} href="/"><a>Home</a></ActiveLink></li>
                            <li onClick={handleClose}><ActiveLink activeClassName={styles.active}  href="/career"><a>Career</a></ActiveLink></li>
                            <li onClick={handleClose} ><ActiveLink activeClassName={styles.active} href="/about"><a>Who we are</a></ActiveLink></li>
                            <li onClick={handleClose}><ActiveLink activeClassName={styles.active} href="/missionVision"><a>Mission&Vision</a></ActiveLink></li>
                            <li onClick={handleClose}><ActiveLink activeClassName={styles.active} href="/contact"><a>Contact</a></ActiveLink></li>
                            <li onClick={handleClose}><ActiveLink activeClassName={styles.active} href="/shop"><a>E-Shop</a></ActiveLink></li>
                        </ul>
                    </div>


                </nav>

            </section>
        </>


    );
};

export default Header;