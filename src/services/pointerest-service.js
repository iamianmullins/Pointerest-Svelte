export class PointerestService {
    pointList = [];
    baseUrl = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getPoints() {
        try {
            const response = await fetch(this.baseUrl + "/api/points")
            this.pointList = await response.json();
            console.log(this.pointList);
            return this.pointList;

        } catch (error) {
            return [];
        }
    }

    async getUsers() {
        try {
            const response = await fetch(this.baseUrl + "/api/users")
            this.userList = await response.json();
            console.log(this.userList);
            return this.userList;
        } catch (error) {
            return [];
        }
    }
}