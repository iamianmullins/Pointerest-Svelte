import { writable } from "svelte/store";

export const welcomeBar = [
    {
        title: "Sign Up",
        icon: "fas fa-user-cog fa-3x",
        colour: "color:rgb(70, 166, 79)",
        link: "/#/signup",
    },
    {
        title: "Log In",
        icon: "fas fa-user-edit fa-3x",
        colour: "color:rgb(55, 130, 222)",
        link: "/#/login",
    }
];

export const mainBar = [
    {
        title: "Newpoi",
        icon: "fas fa fa-map-pin fa-3x",
        colour: "color:rgb(153, 196, 74)",
        link: "/#/newpoi",
    },
    {
        title: "Points",
        icon: "fa fa-map-signs fa-3x",
        colour: "color:rgb(139, 191, 120)",
        link: "/#/points",
    },
    {
        title: "Users",
        icon: "fa fa-users fa-3x",
        colour: "color:rgb(74, 152, 255)",
        link: "/#/users",
    },
    {
        title: "Reviews",
        icon: "fa fa-comments fa-3x",
        colour: "color:rgb(235, 229, 52)",
        link: "/#/reviews",
    },
    {
        title: "Pointerest Map",
        icon: "fas fa-map-marked-alt fa-3x",
        colour: "color:rgb(255, 195, 84)",
        link: "/#/Map",
    },
    {
        title: "Analysis",
        icon: "fas fa-chart-line fa-3x",
        colour: "color:rgb(149, 93, 176)",
        link: "/#/analysis",
    },
    {
        title: "Settings",
        icon: "fas fa-sliders-h fa-3x",
        colour: "color:rgb(62, 204, 247)",
        link: "/#/settings",
    },
    {
        title: "Logout",
        icon: "fas fa-sign-out-alt fa-3x",
        colour: "color:rgb(156, 70, 128)",
        link: "/#/logout",
    }
];

export const navBar = writable({
    bar: [],
});
export const title = writable("");
export const subTitle = writable("");

export const user = writable({
    id: "",
    email: "",
    token: ""
});
