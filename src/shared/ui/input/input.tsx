import s from "./input.module.css"
import Image from "next/image"

interface IInput {
    type: "text" | "password" | "email",
    placeholder: string,
    id: string,
    icon: boolean,
    src?: string
    alt?: string,
    width?: number,
    height?: number,
    cN?: string
}

export const Input: React.FC<IInput> = ({ type, placeholder, id, icon, src, alt, width, height, cN }) => {
    return (
        <div className={`${s.input} ${cN}`}>
            <input type={type} placeholder={placeholder} className={`${s.field} `} id={id} />
            {icon && src && alt && width && height && <Image src={src} alt={alt} width={width} height={height} />}
        </div>
    )
}