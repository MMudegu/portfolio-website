export interface listOfProjectsType{
    title:string,
    imageTitle:string[],
    image: any,
    technology: string,
    description: string,
    url: string,
}

export const listOfProjects:listOfProjectsType[]  = [{
    title: `Little Lemon Restaurant`,
    imageTitle:[
        `Hero Section`,
        `Specials Section`,
        `Testimonials Section`,
        `About Section`,
        `Login Page`,
        `Account Setup`,
        `Billing Form`,
        `Menu Page`,
        `Cart Page`,
        `Reservation Page`,
    ],
    image: [
        require('./Little Lemon Restaurant/Hero Section.png'),
        require(`./Little Lemon Restaurant/Specials Section.png`),
        require(`./Little Lemon Restaurant/Testimonials Section.png`),
        require(`./Little Lemon Restaurant/About Section.png`),
        require(`./Little Lemon Restaurant/Login Page.png`),
        require(`./Little Lemon Restaurant/Account Setup.png`),
        require(`./Little Lemon Restaurant/Billing.png`),
        require(`./Little Lemon Restaurant/Menu.png`),
        require(`./Little Lemon Restaurant/Cart.png`),
        require(`./Little Lemon Restaurant/Reservation.png`),
    ],
    technology: `HTML, CSS, Javascript and React`,
    description: `This is a complete website of a fictional restaurant called The Little Lemon. All the features are implemented including:
                  the login and sign up form, a menu, a table reservation feature and the landing page.`,
    url: `https://vercel.com/mmudegu/restaurant-app/AX48ZFeAincZ9LLJhQQRHYf1dgy8`
}
]
