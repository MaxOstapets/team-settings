import s from "./main.module.css"
import Image from "next/image"
import { Button } from "@/shared"

export const MainPage = () => {
    return (
        <div className={s.main}>
            <section className={s.start}>
                <section className={s.descriptor}>
                    <div className={s.text}>
                        <span className={s.title}>Team settings</span>
                        <p className={s.description}>це сервіс, який допоможе покращити організацію роботу. Тут можна бути лідером, створювати, команди проекти, давати таски та кайфувати)</p>
                    </div>
                    <div className={s.buttons}>
                        <Button text="створити команду" color="primary" fill={true} type="submit" />
                        <Button text="приєднатися до команди" color="primary" fill={true} type="submit" />
                    </div>
                </section>
                <div className={s.aboutUsNav}>
                    <p className={s.moreAboutUs}>дізнайтесь про нас більше</p>
                    <Image src="./images/downArrow.svg" alt="down arrow" width={20} height={56} />
                </div>
            </section>
            <section className={s.aboutUs}>
                <div className={`${s.webSite} ${s.aboutUsSection}`}>
                    <div className={`${s.aboutUsDescription} ${s.webSiteDescription}`}>
                        <span className={s.aboutUstitle}>Сайт</span>
                        <p className={s.descriptionSection}>Наш сайт зроблений так, щоб вам було зручно ним користуватися та отриувати задоволення від використання</p>
                    </div>
                    <Image src="./images/imageExample.svg" alt="example" width={660} height={432} />
                </div>
                <div className={`${s.idea} ${s.aboutUsSection}`}>
                    <div className={`${s.aboutUsDescription} ${s.ideaDescription}`}>
                        <span className={`${s.aboutUstitle} ${s.ideaTitle}`}>Ідея</span>
                        <p className={`${s.descriptionSection} ${s.ideaDescriptionSection}`}>Ми хотіли зробити роботу в команді комфортною та вайбовою. Хочемо зменшити кількість професійних непорозумінь між людьми</p>
                    </div>
                </div>
                <div className={`${s.motavation} ${s.aboutUsSection}`}>
                    <Image src="./images/imageExample.svg" alt="example" width={660} height={432} />
                    <div className={`${s.aboutUsDescription} ${s.webSiteDescription}`}>
                        <span className={s.aboutUstitle}>Мотівейшн</span>
                        <p className={s.descriptionSection}>Не бійтеся засудження від людей, з якими працюєте. Всі ми робимо помилки. Головне - вчитися на них. Успіху вам!</p>
                    </div>
                </div>
                <div className={`${s.youAreCool} ${s.aboutUsSection}`}>
                    <div className={`${s.aboutUsDescription} ${s.ideaDescription}`}>
                        <span className={`${s.aboutUstitle} ${s.ideaTitle}`}>Ви круті</span>
                        <p className={`${s.descriptionSection} ${s.ideaDescriptionSection}`}>Дякуємо вам за те що це зараз читаєте та сподіваємось, що вам буде комфортно на нашому сайті!</p>
                    </div>
                </div>
            </section>
        </div>
    )
}