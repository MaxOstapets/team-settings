import s from "./button.module.css"

interface IButton {
    text: string
    fill?: boolean
    border?: boolean
    color: "primary" | "secondary"
    cN?: string
    type: "submit" | "reset" | "button"
}

export const Button: React.FC<IButton> = ({ text, color, fill, border, cN, type }) => {
    return (
        color === "primary" ?
            <button type={type} className={`${s.primary} ${fill ? s.primaryFill : s.primaryText} ${border ? s.primaryBorder : ""} ${cN}`}>{text}</button>
            :
            <button type={type} className={`${s.secondary} ${fill ? s.secondaryFill : s.secondaryText} ${border ? s.secondaryBorder : ""} ${cN}`}>{text}</button>
    )
}