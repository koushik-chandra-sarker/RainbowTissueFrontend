import React, {useState} from 'react';
import styles from "./Header.module.scss"
import classnames from 'classnames';
import Link from "next/link";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)

    function handleMenu(checked) {
        setOpenMenu(checked)
        if (openMenu) {
            document.body.style.overflow = 'auto'
        } else {
            document.body.style.overflow = 'hidden'
        }
    }

    return (

        <>
            <section className={classnames(styles.navbar, "display-flex justify-content-center align-items-center")}>
                <input onChange={event => handleMenu(event.target.checked)} className={classnames(styles.menu_icon)}
                       type="checkbox" id="menu-icon" name="menu-icon"/>
                <label htmlFor="menu-icon"/>

                <div className={classnames(styles.logo, 'flex items-center')}>
                    <img className={'sm:h-20 h-16'} src="/static/image/rain-logo.png" alt="Rainbow Tissue logo"/>
                    <div>
                        <h4 className={'text-xl text-primary font-extrabold'}>Rainbow</h4>
                        <p className={'text-sm sm:text-xl sm:w-full w-40 text-description'}>Tissue & Paper Industries
                            Ltd</p>
                    </div>
                </div>
                <nav className={classnames(styles.nav, "display-flex")}>
                    <div className={classnames(styles.nav_inner, 'display-flex')}>
                        <ul className={classnames("display-flex justify-content-center align-items-center")}>
                            <li className={styles.active}><Link href="/"><a>Home</a></Link></li>
                            <li><a href="#">Dealership</a></li>
                            {/*<li><a href="#">Media Center</a></li>*/}
                            <li><Link href="/career"><a>Career</a></Link></li>
                            <li><Link href="/about"><a>How we are</a></Link></li>
                            <li><Link href="/missionVision"><a>Mission&Vision</a></Link></li>
                            <li><Link href="/contact"><a>Contact</a></Link></li>
                            <li><Link href="/shop"><a>E-Shop</a></Link></li>
                        </ul>
                        {/*<div
                            className={classnames(styles.search_bar, "display-flex justify-content-center align-items-center")}>
                            <div className={styles.search_bar_inner}>
                                <input type="text" placeholder="Search..."/>
                                <div className={styles.search}/>
                            </div>
                        </div>*/}
                    </div>


                </nav>

            </section>
        </>


    );
};

export default Header;