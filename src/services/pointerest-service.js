import axios from "axios";
import { user } from "../stores";

export class PointerestService {
    pointList = [];
    userList = [];
    baseUrl = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getPoints() {
        try {
            const response = await fetch(this.baseUrl + "/api/points")
            this.pointList = await response.json();
            return this.pointList;
        } catch (error) {
            return [];
        }
    }

    async getUsers() {
        try {
            const response = await fetch(this.baseUrl + "/api/users")
            this.userList = await response.json();
            return this.userList;
        } catch (error) {
            return [];
        }
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
            user.set(response.data);
            return response.status == 200;
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