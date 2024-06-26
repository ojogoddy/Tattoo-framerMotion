//import images
import logo from "../src/assets/img/header/logo.svg"
import GalleryImg1 from "../src/assets/img/gallery/1.png"
import GalleryImg2 from "../src/assets/img/gallery/2.png"
import GalleryImg3 from "../src/assets/img/gallery/3.png"
import GalleryImg4 from "../src/assets/img/gallery/4.png"
import GalleryImg5 from "../src/assets/img/gallery/5.png"
import GalleryImg6 from "../src/assets/img/gallery/6.png"
import GalleryImg7 from "../src/assets/img/gallery/7.png"
import GalleryImg8 from "../src/assets/img/gallery/8.png"
import QuoteImg from "../src/assets/img/testimonial/quote.svg"
//import icons
import {IoLogoInstagram, IoLogoFacebook, IoLogoPinterest, IoLogoTwitter, IoLogoYoutube, IoMdArrowForward} from "react-icons/io"
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPlay } from "react-icons/fa"
import { FiSend } from "react-icons/fi"

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

//GALLERY SECTION
export const galleryData = {
    title: "Gallery",
    btnText: "View all",
    href: "/gallery",
    btnIcon: <IoMdArrowForward/>,
    images: [
        {
            src: GalleryImg1,
            original: GalleryImg1,
            width: 465,
            height: 412,
        },
        {
            src: GalleryImg2,
            original: GalleryImg2,
            width: 465,
            height: 540,
        },
        {
            src: GalleryImg3,
            original: GalleryImg3,
            width: 465,
            height: 412,
        },
        {
            src: GalleryImg4,
            original: GalleryImg4,
            width: 465,
            height: 540,
        },
        {
            src: GalleryImg5,
            original: GalleryImg5,
            width: 465,
            height: 540,
        },
        {
            src: GalleryImg6,
            original: GalleryImg6,
            width: 465,
            height: 412,
        },
        {
            src: GalleryImg7,
            original: GalleryImg7,
            width: 465,
            height: 540,
        },
        {
            src: GalleryImg8,
            original: GalleryImg8,
            width: 465,
            height: 412,
        },
    ]
}

//INTERVIEW SECTION
export const interviewData = {
    title:
      "“Consider what you desire. Your tattoo artist will never tell you what tattoo to have.”",
    btnText: "Watch it now",
    btnIcon: <FaPlay />,
  };

  //TESTIMONIAL SECTION
  export const testimonialData = [
    {
        quoteImg: QuoteImg,
        message: "The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique.They will properly consult with you.",
        name: "John Doe",
        occupation: "Tattoo Artist",
    },
    {
        quoteImg: QuoteImg,
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?",
        name: "Harold Wren",
        occupation: "Tattoo Artist",
      },
  ]
//   CONTACT SECTION
export const contactData = {
    title: "Get in touch with us",
    info: [
        {
            title: "Ankara Studio",
            subtitle: "In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus",
            address: {
                icon: <FaMapMarkerAlt />,
                name: "784.Cd 145.Sk 4/A 06200, Çankaya, Ankara",
              },
              phone: {
                icon: <FaPhoneAlt />,
                number: "+90 (555) 555 55-55",
              },
              email: {
                icon: <FaEnvelope />,
                address: "contact@yourcompany.com",
              },
              link: "Get location",
        }
    ],
    form: {
        name: "Your name",
        email: "Your email address",
        message: "your messages",
        btnText: "send"
    }
}

// FOOTER SECTION
export const footerData = {
    about: {
        title: "About Us",
    subtitle:
      "Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus",
    address: {
      icon: <FaMapMarkerAlt />,
      name: "784.Cd 145.Sk 4/A 06200, Çankaya, Ankara",
        },
        phone: {
            icon: <FaPhoneAlt />,
            number: "+90 (555) 555 55-55",
          },
          email: {
            icon: <FaEnvelope />,
            address: "contact@yourcompany.com",
          },

    },
    links: {
        title: "Useful links",
        items: [
          { href: "/about", name: "About us" },
          { href: "/gallery", name: "Gallery" },
          { href: "/contact", name: "Contact" },
        ],
      },
      program: {
        title: "Working Time",
        items: [
          { name: "Mon - Tue / Appointment" },
          { name: "Wed - Fri / 10:00 - 9:00pm" },
          { name: "Sat / 10:00 - 6:00pm" },
          { name: "Sun / no work on this day" },
        ],
      },
      newsletter: {
        title: "Newsletter",
        subtitle:
          "Elit duis porttitor massa tellus nun in velit arcu posuere integer.",
        form: {
          placeholder: "Your email address",
          icon: <FiSend />,
        },
      },
}