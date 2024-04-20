import styles from './Footer.module.css'
import logo__fb from './assets/facebook.svg'
import logo__insta from './assets/instagram.svg'
import logo__tiktok from './assets/tiktok.svg'

export const Footer = () => {

    return( 
        <>
            <footer className={styles.footer}>

                <div>
                    <ul className={styles.footerSocial}>
                        <li><a href="#"><img src={logo__fb} alt="Logo de Facebook" /></a></li>
                        <li><a href="#"><img src={logo__insta} alt="Logo de Instagram" /></a></li>
                        <li><a href="#"><img src={logo__tiktok} alt="Logo de TikTok" /></a></li>
                    </ul>
                </div>
                
            </footer>
        </>
    );
}