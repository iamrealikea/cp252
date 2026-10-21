const User = require('../models/user');
const UserData = require('../models/userData');

// Count method
describe('Count user', () => {
    test('default user count', () => {
      testUserData = new UserData();  
      const userCount = testUserData.getUserCount();
      expect(userCount).toEqual(3);
    })

    test('clear user and Count', () => {
        testUserData = new UserData(); 
        testUserData.clearUsers()
        const userCount = testUserData.getUserCount();
        expect(userCount).toEqual(0);
    
    })
})

// Remove user
describe('remove user', () => {
    test('Remove one', () => {
      testUserData = new UserData();
      const userCountBefore = testUserData.getUserCount();
      testUserData.removeOneUser();
      const userCountAfter = testUserData.getUserCount();
      const difUser = userCountBefore - userCountAfter;
      expect(difUser).toEqual(1);
    })
})

describe('remove two users', () => {
    test('Remove two', () => {
      testUserData = new UserData();
      const userCountBefore = testUserData.getUserCount();
      testUserData.removeTwoUsers();
      const userCountAfter = testUserData.getUserCount();
      const difUser = userCountBefore - userCountAfter;
      expect(difUser).toEqual(2);
    })
})

describe('find user by email', () => {
    test('Find user email', () => {
      const newUser = new User("Aek", "aekzzzzz@gmail.com");
      testUserData = new UserData();
      testUserData.addUser(newUser);
      let name = testUserData.findUserByEmail("aekzzzzz@gmail.com");
      expect(name).toEqual('Aek');
    })
})

describe('find user by email', () => {
    test('Not found user email', () => {
      const newUser = new User("Aek", "aekzzzzz@gma.co");
      testUserData = new UserData();
      testUserData.addUser(newUser);
      let name = testUserData.findUserByEmail("aekzzzzz@gmail.com");
      expect(name).toBeNull();
    })
})