import s from "./main.module.css"
import Image from "next/image"
import { Button } from "@/shared"

export const MainPage = () => {
    return (
        <main className={s.main}>
            <section className={s.start}>
                <section className={s.descriptor}>
                    <div className={s.text}>
                        <span className={s.title}>Team settings</span>
                        <p className={s.description}>це сервіс, який допоможе покращити організацію роботу. Тут можна бути лідером, створювати, команди проекти, давати таски та кайфувати)</p>
                    </div>
                    <div className={s.buttons}>
                        <Button text="створити команду" color="primary" fill={true} />
                        <Button text="приєднатися до команди" color="primary" fill={true} />
                    </div>
                </section>
                <div className={s.aboutUsNav}>
                    <p className={s.moreAboutUs}>дізнайтесь про нас більше</p>
                    <Image src="./images/downArrow.svg" alt="down arrow" width={20} height={56} />
                </div>
            </section>
        </main>
    )
}