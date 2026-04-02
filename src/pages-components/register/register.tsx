import s from "./register.module.css"
import Image from "next/image"
import { Button } from "@/shared"

export const RegisterPage = () => {
    return (
        <>
            <Image src="./images/arrow.svg" alt="arrow" width={59} height={52} style={{ position: "absolute", top: "5%", left: "2%" }} />
            <div className={s.main}>
                <section className={s.description}>
                    <span className={s.text}>Що ж. Почнемо реєстрацію. Введіть будь ласка електронну адресу та пароль, або зареєструйтесь через Google</span>
                    <Image src="./images/imageExample2.svg" alt="example" width={370} height={326} />
                </section>
                <form className={s.form}>
                    <div className={s.inputs}>
                        <div className={s.input}>
                            <input type="text" placeholder="електронна адреса" className={s.field} id="email" />
                            <Image src="./images/emailPrimary.svg" alt="email" width={28} height={23} />
                        </div>
                        <div className={s.input}>
                            <input type="password" placeholder="пароль" className={s.field} id="password" />
                            <Image src="./images/password.svg" alt="email" width={28} height={23} />
                        </div>
                        <button className={s.regWithBtn} type="button">
                            <p className={s.regText}>Зареєструватися з Google</p>
                            <Image src="./images/google.svg" alt="google" width={20} height={20} />
                        </button>
                    </div>
                    <Button text="Підтвердити" color="primary" fill={true} cN={s.confirm} type="button" size="large" />
                </form>
            </div>
        </>
    )
}