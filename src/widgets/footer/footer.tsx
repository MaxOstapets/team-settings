import s from "./footer.module.css"
import Image from "next/image"

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.logoSection}>
                <Image src="./images/logo.svg" width={247} height={264} alt="logo" />
                <div className={s.descriptionSection}>
                    <span className={s.title}>Team settings</span>
                    <p className={s.description}>ваш помічник в організації командної роботи</p>
                </div>
            </div>
        </footer>
    )
}