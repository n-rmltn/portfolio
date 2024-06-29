import { link } from "fs";

export const navItems = [
    { name: "Home", link: "#hero" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 2,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-3 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 3,
        title: "Currently learning NextJS and TailwindCSS.",
        description: "Current Endeavor",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 4,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "A Part Picker - Computer Part Management System",
        des: "A web app that helps users manage their computer parts and build their dream PC.",
        img: "/app.svg",
        iconLists: ["/laravel.svg", "/mysql.svg", "/vs.svg"],
        link: "https://github.com/n-rmltn/norm-fyp",
    },
    {
        id: 2,
        title: "KBDmy - Peripherals eCommerce Platform",
        des: "An eCommerce platform that sells computer peripherals and accessories",
        img: "/kbdmy.svg",
        iconLists: ["/laravel.svg", "/mysql.svg", "/vs.svg"],
        link: "https://github.com/n-rmltn/fypproject",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Lighting Engineer",
        desc: "Create timecoded light shows for clubs and events using TigerTouch and Resolume Arena.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "SEO Intern",
        desc: "Assisted in the development of SEO strategies for clients of WeaveAsia",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/n-rmltn",
    },
    {
        id: 2,
        img: "/insta.svg",
        link: "https://www.instagram.com/n.rmln/",
    },
    {
        id: 3,
        img: "/resume.svg",
        link: "/resume.pdf",
        download: true,
    },
];
