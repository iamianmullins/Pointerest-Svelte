import axios from "axios";
import { user } from "../stores";

export class PointerestService {
    pointList = [];
    userList = [];
    baseUrl = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        if (localStorage.pointerest) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.pointerest);
        }
    }

    async getPoints() {
        try {
            const response = await axios.get(this.baseUrl + "/api/points")
            this.pointList = response.data;
            return this.pointList;
        } catch (error) {
            return [];
        }
    }

    async getUsers() {
        try {
            const response = await axios.get(this.baseUrl + "/api/users")
            this.userList = await response.data;
            return this.userList;
        } catch (error) {
            return [];
        }
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
            if (response.data.success) {
                axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
                user.set({
                    email: email,
                    token: response.data.token
                });
                localStorage.pointerest = JSON.stringify(response.data.token);
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async logout() {
        user.set({
            email: "",
            token: ""
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.pointerest = null;
    }


    async signup(firstName, lastName, email, password) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            };
            const response = await axios.post(this.baseUrl + "/api/users", userDetails);
            const newUser = await response.data;
            user.set(newUser);
            return true;
        } catch (error) {
            return false;
        }
    }

    async updateSettings(firstName, lastName, email, password, id) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                _id: id
            };
            console.log(userDetails);
            const response = await axios.put(`${this.baseUrl}/api/users/${id}`, userDetails);
            const newUser = await response.data;
            user.set(newUser);
            return true;
        } catch (error) {
            return false;
        }
    }

    async createPoi(username, poiname, category, description, latitude, longitude) {
        try {
            const point = {
                username: username,
                poiname: poiname,
                category: category,
                description: description,
                latitude: latitude,
                longitude: longitude,
            };

            const response = await axios.post(this.baseUrl + "/api/points", point);
            console.log(response);
            return response.status == 200;
        } catch (error) {
            return false;
        }
    }
}