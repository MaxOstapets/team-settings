import s from "./members.module.css"
import Image from "next/image"

export const Members = () => {
    return (
        <div className={s.members}>
            <span className={s.memberTitle}>Учасники</span>
            <ul className={s.membersList}>
                <li className={s.member}>
                    <Image src="./images/member1.svg" alt="member" width={55} height={55} />
                    <p className={s.name}>Олександр Коваль</p>
                </li>
                <li className={s.member}>
                    <Image src="./images/member2.svg" alt="member" width={55} height={55} />
                    <p className={s.name}>Ірина Мельник</p>
                </li>
                <li className={s.member}>
                    <Image src="./images/member3.svg" alt="member" width={55} height={55} />
                    <p className={s.name}>Андрій Шевчук</p>
                </li>
                <li className={s.member}>
                    <Image src="./images/member4.svg" alt="member" width={55} height={55} />
                    <p className={s.name}>Наталія Бондар</p>
                </li>
                <li className={s.member}>
                    <Image src="./images/member5.svg" alt="member" width={55} height={55} />
                    <p className={s.name}>Дмитро Савчук</p>
                </li>
                <li className={s.member}>
                    <Image src="./images/member6.svg" alt="member" width={55} height={55} />
                    <p className={s.name}>Олена Романюк</p>
                </li>
                <li className={s.member}>
                    <Image src="./images/member7.svg" alt="member" width={55} height={55} />
                    <p className={s.name}>Віктор Поліщук</p>
                </li>
                <li className={s.member}>
                    <Image src="./images/member8.svg" alt="member" width={55} height={55} />
                    <p className={s.name}>Марія Ткаченко</p>
                </li>
                <li className={s.member}>
                    <Image src="./images/member9.svg" alt="member" width={55} height={55} />
                    <p className={s.name}>Сергій Лисенко</p>
                </li>
                <li className={s.member}>
                    <Image src="./images/member10.svg" alt="member" width={55} height={55} />
                    <p className={s.name}>Микола Гнатюк</p>
                </li>
                <li className={s.member}>
                    <Image src="./images/member11.svg" alt="member" width={55} height={55} />
                    <p className={s.name}>Данило Шевченко</p>
                </li>
                <li className={s.member}>
                    <Image src="./images/member12.svg" alt="member" width={55} height={55} />
                    <p className={s.name}>Євген Почайний</p>
                </li>
            </ul>
        </div>
    )
}