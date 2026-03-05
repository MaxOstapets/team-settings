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
        <button type={type} className=
            {`
                ${color === "primary" ? s.primary : ""}
                ${fill ? s.primaryFill : s.primaryText}
                ${border ? s.primaryBorder : ""}
                ${cN}
            `}>
            {text}
        </button>
    )
}