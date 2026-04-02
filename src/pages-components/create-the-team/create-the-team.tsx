import s from "./create-the-team.module.css"
import { Button, Description, Input } from "@/shared"

export const CreateTheTeamPage = () => {
    return (
        <div className={s.create}>
            <Description text="Для того щоб створити команду потрібно написати назву, опис (по бажанню) та згенерувати код доступу (його треба передати учасникам, щоб вони приєднались)" />
            <form className={s.form}>
                <section className={s.section}>
                    <div className={s.inputs}>
                        <Input placeholder="назва команди" type="text" id="nameOfTheTeam" alt="team" icon={true} src="./images/teamPrimary.svg" width={31} height={31} />
                        <Input placeholder="про команду" type="text" id="aboutTeam" icon={false} cN={`${s.aboutTeam}`} />
                    </div>
                    <div className={s.generator}>
                        <div className={s.code}>"*_*"</div>
                        <Button text="Згенерувати" type="submit" color="secondary" fill={true} cN={`${s.generate}`} size="medium" />
                    </div>
                </section>
                <Button text="Створити команду" type="submit" color="primary" fill={true} cN={`${s.submit}`} size="large" />
            </form>
        </div >
    )
}