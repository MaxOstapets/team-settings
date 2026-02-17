import s from "./header.module.css"
import Image from "next/image"

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <Image src="./images/logo.svg" alt="logo" width={85} height={85} />
                <span className={s.title}>Team Settings</span>
            </div>
            <nav className={s.nav}>
                <div className={s.navItem}>
                    <Image src="./images/home.svg" alt="home" width={31} height={26} />
                    <p className={s.link}>Головна</p>
                </div>
                <div className={s.navItem}>
                    <Image src="./images/teams.svg" alt="teams" width={31} height={26} />
                    <p className={s.link}>Команди</p>
                </div>
                <div className={s.navItem}>
                    <Image src="./images/createTeam.svg" alt="create team" width={31} height={26} />
                    <p className={s.link}>Створити команду</p>
                </div>
                <div className={s.navItem}>
                    <Image src="./images/register.svg" alt="register" width={31} height={26} />
                    <p className={s.link}>Зареєструватися</p>
                </div>
                <div className={s.navItem}>
                    <Image src="./images/logIn.svg" alt="log in" width={31} height={26} />
                    <p className={s.link}>Увійти</p>
                </div>
            </nav>
        </header>
    )
}