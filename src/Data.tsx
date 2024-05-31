//import images
import logo from "../src/assets/img/header/logo.svg"

//import icons
import {IoLogoInstagram, IoLogoFacebook, IoLogoPinterest, IoLogoTwitter, IoLogoYoutube, IoMdArrowForward} from "react-icons/io"

//Navbar & Header section
export const headerData ={
    logo: logo
}

export const navData = {
    items: [
        {href: "/", name: "Home"},
        {href: "/about", name: "About"},
        {href: "/gallery", name: "Gallery"},
        {href: "/contact", name: "Contact"},
    ]
};

export const socialData = [
    {href: "#", icon: <IoLogoFacebook/>},
    {href: "#", icon: <IoLogoInstagram/>},
    {href: "#", icon: <IoLogoPinterest/>},
    {href: "#", icon: <IoLogoTwitter/>},
    {href: "#", icon: <IoLogoYoutube/>},
]

//HERO SECTION
export const heroData = {
    title: "Who we are?",
    subtitle: "Tattoos have their own unique power and magic. They not only beautify the body but also the psyche. ",
    btnText: "read more",
    btnIcon: <IoMdArrowForward/>
}

//ABOUT SECTION
export const aboutData = {
    title: "Our Story",
    subtitle: "In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.",
    subtitle2: "Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.",
    btnText: "Know more",
    btnIcon: <IoMdArrowForward/>
}

//