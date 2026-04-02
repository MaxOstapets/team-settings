import s from "./join.module.css"
import { Input, Button, Description } from "@/shared"
import Image from "next/image"

export const JoinPage = () => {
    return (
        <div className={s.join}>
            <form className={s.form}>
                <Input type="text" placeholder="код команди" id="teamCode" icon={false} cN={`${s.input}`} />
                <Button text="Приєднатися" type="submit" color="primary" fill={true} cN={`${s.button}`} size="large" />
            </form>
            <section className={s.descriptor}>
                <Description text="Введіть код команди та подивіться на анімацію (просто так)" />
                <Image src="./images/image2.svg" alt="example" width={255} height={255} />
                <Description text="Сподіваємось вам будо добре в колі людей, до яких приєднуєтесь" />
            </section>
        </div>
    )
}