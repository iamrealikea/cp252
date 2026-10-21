const initialUsersData = require('./initdata');
const User = require('./user');

class UserData {
    constructor() {
        this.users = [];
        initialUsersData.forEach(user => {
            const newUser = new User(user.name, user.email); 
            this.addUser(newUser);
        });
    }

    // Method to add a user
    addUser(user) {
        this.users.push(user);
        //this.n = this.n + 1;
    }

    // Method to clear all users
    removeOneUser() {
        if ( this.users.length > 0 ) {
            return this.users.pop();
        }else{
            return null
        }       
    }


    // Method to clear all users
    getUserCount() {
        return this.users.length;
    }

    // Method to clear all users
    clearUsers() {
        this.users = [];
    }

    removeTwoUsers() {
        if (this.users.length >= 2) {
            this.users.pop();
            this.users.pop();
        } else {
            return null;
        }
    }

    findUserByEmail(email) {
        const user = this.users.find(user => user.email === email);
        if (user) {
            return user.name;
        }
        else return null;
    }

}

module.exports = UserData;