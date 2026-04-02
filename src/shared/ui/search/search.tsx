import s from "./search.module.css"
import Image from "next/image"

export const Search = () => {
    return (
        <div className={s.search}>
            <input type="text" className={s.searchField} placeholder="Пошук" />
            <Image src="./images/search.svg" width={22} height={22} alt="search" />
        </div>
    )
}