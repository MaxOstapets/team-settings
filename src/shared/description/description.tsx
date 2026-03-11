import s from "./description.module.css"

interface IDescription {
    text: string
}

export const Description: React.FC<IDescription> = ({ text }) => {
    return (
        <span className={s.description}>{text}</span>
    )
}