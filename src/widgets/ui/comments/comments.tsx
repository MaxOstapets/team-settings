import s from "./comments.module.css"
import Image from "next/image"
import { Input } from "@/shared"

export const Comments = () => {
    return (
        <div className={s.comments}>
            <section className={s.comHat}>
                <span className={s.comTitle}>Коментарі</span>
                <Input type="text" placeholder="Ваш коментар" id="comentInp" icon={true} src="./images/send.svg" width={28} height={28} cN={`${s.comInput}`} alt="send" />
            </section>
            <ul className={s.comList}>
                <li className={s.comment}>
                    <Image src="./images/member1.svg" alt="member" width={146} height={146} />
                    <div className={s.comText}>
                        <span className={s.comName}>Олександр Коваль</span>
                        <p className={s.comContext}>Робота в цій команді була дуже комфортною та продуктивною. Кожен учасник вносив свій вклад, а спільна підтримка й чітка комунікація допомогли досягти відмінного результату.</p>
                    </div>
                </li>
                <li className={s.comment}>
                    <Image src="./images/member3.svg" alt="member" width={146} height={146} />
                    <div className={s.comText}>
                        <span className={s.comName}>Андрій Шевчук</span>
                        <p className={s.comContext}>Робота в команді була організованою та мотивуючою. Приємно працювати з людьми, які відповідально ставляться до спільної мети.</p>
                    </div>
                </li>
                <li className={s.comment}>
                    <Image src="./images/member4.svg" alt="member" width={146} height={146} />
                    <div className={s.comText}>
                        <span className={s.comName}>Наталія Бондар</span>
                        <p className={s.comContext}>Команда показала високий рівень взаєморозуміння та підтримки. Навіть складні задачі вирішувалися швидко й ефективно.</p>
                    </div>
                </li>
                <li className={s.comment}>
                    <Image src="./images/member6.svg" alt="member" width={146} height={146} />
                    <div className={s.comText}>
                        <span className={s.comName}>Олена Романюк</span>
                        <p className={s.comContext}>Проєкт дав можливість отримати цінний досвід командної роботи. Атмосфера була дружньою та професійною одночасно.</p>
                    </div>
                </li>
                <li className={s.comment}>
                    <Image src="./images/member8.svg" alt="member" width={146} height={146} />
                    <div className={s.comText}>
                        <span className={s.comName}>Марія Ткаченко</span>
                        <p className={s.comContext}>Співпраця з командою залишила лише позитивні враження. Кожен учасник був залучений і розумів свою роль.</p>
                    </div>
                </li>
                <li className={s.comment}>
                    <Image src="./images/member10.svg" alt="member" width={146} height={146} />
                    <div className={s.comText}>
                        <span className={s.comName}>Микола Гнатюк</span>
                        <p className={s.comContext}>Дуже сподобалась відкритість у спілкуванні та готовність допомагати. Це значно полегшило роботу над проєктом.</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}