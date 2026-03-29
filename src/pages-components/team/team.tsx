import s from "./team.module.css"
import Image from "next/image"
import { Button, Input } from "@/shared"

export const TeamPage = () => {
    return (
        <div className={s.team}>
            <div className={s.descriptor}>
                <Image src="./images/team.svg" alt="team" width={213} height={213} />
                <div className={s.description}>
                    <span className={s.title}>Ilianors</span>
                    <p className={s.aboutTeam}>ми команда, яка прагне чітко виконувати роботу та бути корисними. любимо грати в боулінг на вихідних</p>
                </div>
            </div>
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
            <div className={s.projects}>
                <section className={s.hat}>
                    <div className={s.hatSection}>
                        <span className={s.projectsTitle}>Проекти</span>
                        <div className={s.search}>
                            <input type="text" className={s.searchField} placeholder="Пошук" />
                            <Image src="./images/search.svg" width={22} height={22} alt="search" />
                        </div>
                    </div>
                    <Button text="Новий проект" color="primary" type="button" fill={true} />
                </section>
                <div className={s.projectsList}>
                    <div className={s.project}>
                        <Image src="./images/project1.svg" alt="project" width={150} height={150} />
                        <div className={s.projectDescriptor}>
                            <section className={s.projectDescriptorHat}>
                                <div className={s.projectDescription}>
                                    <span className={s.projectTitle}>Smart Energy Monitor</span>
                                    <span className={s.countOfMembers}>5 учасників</span>
                                    <span className={s.date}>15.02.2014</span>
                                </div>
                                <p className={s.status}>Завершений</p>
                            </section>
                            <span className={s.aboutProject}>Проєкт спрямований на моніторинг споживання електроенергії в реальному часі. Система дозволяє зменшити витрати та оптимізувати навантаження на мережу.</span>
                        </div>
                    </div>
                    <div className={s.project}>
                        <Image src="./images/project2.svg" alt="project" width={150} height={150} />
                        <div className={s.projectDescriptor}>
                            <section className={s.projectDescriptorHat}>
                                <div className={s.projectDescription}>
                                    <span className={s.projectTitle}>RoboLine</span>
                                    <span className={s.countOfMembers}>8 учасників</span>
                                    <span className={s.date}>23.11.2023</span>
                                </div>
                                <p className={s.status}>На фінальній стадії</p>
                            </section>
                            <span className={s.aboutProject}>Автоматизована лінія для сортування продукції. Проєкт використовує датчики та мікроконтролери для підвищення точності виробництва.</span>
                        </div>
                    </div>
                </div>
            </div>
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
            <Button text="Покинути команду" type="submit" color="secondary" fill={true} cN={`${s.leaveTheTeam}`} />
        </div>
    )
}