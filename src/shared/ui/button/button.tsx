import s from "./button.module.css"

interface IButton {
    text: string
    fill?: boolean
    border?: boolean
    color: "primary" | "secondary"
    cN?: string
    type: "submit" | "reset" | "button"
    size: "small" | "medium" | "large"
}

export const Button: React.FC<IButton> = ({ text, color, fill, border, cN, type, size }) => {
    const sizeClass = size === "large" ? s.large : size === "medium" ? s.medium : s.small
    const baseClass = color === "primary" ? s.primary : s.secondary
    const fillClass = fill ? color === "primary" ? s.primaryFill : s.secondaryFill : color === "primary" ? s.primaryText : s.secondaryText
    const borderClass = border ? color === "primary" ? s.primaryBorder : s.secondaryBorder : ""

    return <button type={type} className={`${baseClass} ${fillClass} ${borderClass} ${sizeClass} ${cN}`}>{text}</button>
}