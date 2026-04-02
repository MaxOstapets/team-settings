import s from "./descriptor.module.css"
import Image from "next/image"

interface IDescriptor {
    src: string,
    alt: string,
    title: string,
    text: string
}

export const Descriptor: React.FC<IDescriptor> = ({ src, alt, title, text }) => {
    return (
        <div className={s.descriptor}>
            <Image src={src} alt={alt} width={213} height={213} />
            <div className={s.description}>
                <span className={s.title}>{title}</span>
                <p className={s.aboutTeam}>{text}</p>
            </div>
        </div>
    )
}