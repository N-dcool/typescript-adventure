"use strict";
/*
    class User {
        public email: string;
        private name: string;
        readonly city: string = "Pune";
        constructor(email: string, name: string) {
            this.email = email;
            this.name = name;
        }
    }
*/
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Pune";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const naresh = new User("naresh@gmail.com", "naresh", "1234");
// naresh.city = "Mumbai"; //=> Error: Cannot assign to 'city' because it is a read-only property.
