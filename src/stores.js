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
        title: "Points",
        icon: "fa fa-map-signs fa-3x",
        colour: "color:rgb(153, 196, 74)",
        link: "/#/points",
    },
    {
        title: "Users",
        icon: "fa fa-users fa-3x",
        colour: "color:rgb(74, 152, 255)",
        link: "/#/users",
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