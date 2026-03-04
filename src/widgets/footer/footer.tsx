import s from "./footer.module.css"
import Image from "next/image"
import { contacts, links } from "./footer.data"

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
            <ul className={s.contacts}>
                {contacts.map((el) =>
                    <li className={s.contactItem} key={el.alt}>
                        <Image src={el.src} width={el.width} height={el.height} alt={el.alt} />
                        <p className={s.contact}>{el.contact}</p>
                    </li>
                )}
            </ul>
            <ul className={s.links}>
                {links.map((el) =>
                    <li className={s.linkItem} key={el.alt}>
                        <Image src={el.src} width={32} height={27} alt={el.alt} />
                        <p className={s.link}>{el.link}</p>
                    </li>
                )}
            </ul>
        </footer>
    )
}