interface IContacts {
    src: string,
    contact: string,
    alt: string,
    width: number,
    height: number
}

interface ILinks {
    src: string,
    link: string,
    alt: string,
}

export const contacts: IContacts[] = [
    {
        src: "./images/emailPrimary.svg",
        contact: "teamsetting@gmail.com",
        alt: "email",
        width: 28,
        height: 23
    },
    {
        src: "./images/phonePrimary.svg",
        contact: "+38 (066) 103 9348",
        alt: "phone",
        width: 28,
        height: 29
    },
]

export const links: ILinks[] = [
    {
        src: "./images/homePrimary.svg",
        link: "Головна",
        alt: "home primary"
    },
    {
        src: "./images/projectsPrimary.svg",
        link: "Проекти",
        alt: "projects primary"
    },
    {
        src: "./images/teamPrimary.svg",
        link: "Команди",
        alt: "teams primary"
    },
    {
        src: "./images/registerPrimary.svg",
        link: "Зареєструватися",
        alt: "register primary"
    },
    {
        src: "./images/logInPrimary.svg",
        link: "Увійти в акаунт",
        alt: "log in primary"
    },
    {
        src: "./images/profilePrimary.svg",
        link: "Профіль",
        alt: "profile primary"
    },
]