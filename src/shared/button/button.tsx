import s from "./button.module.css"

interface IButton {
    text: string
    fill?: boolean
    border?: boolean
    color: "primary" | "secondary"
}

export const Button: React.FC<IButton> = ({ text, color, fill, border }) => {
    return (
        <button className=
            {`
                ${color === "primary" ? s.primary : ""}
                ${fill ? s.primaryFill : s.primaryText}
                ${border ? s.primaryBorder : ""}
            `}>
            {text}
        </button>
    )
}