import users from './users.js'; 

// Задание 1
// Получить массив имен всех пользователей (поле name).
// Задание 1.1
const getUserNames = (users) => users.map(user => user.name);
console.log(getUserNames(users));

// Задание 1.2
const getUserNamess = (users) => {
  const userNames = users.map(user => user.name);
  return userNames;
}
console.log(getUserNamess(users));


// Задание 1.3
// const getUserNamess = (users) => {
// const userNames = [];
// users.forEach(user => {
  //   userNames.push(user.name);
  // });
  // return userNames;
  // }
// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]



// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// const getUsersWithEyeColor = (users, color) => {
//   const userEyes = [];
//   users.forEach(user => {
//     if (user.eyeColor === color) {
//       userEyes.push(user);
//     }
//   })
//   return userEyes;
// };
// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);
console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]



// Задание 3
// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
  const userGender = [];
  users.forEach(user => {
    if (user.gender === gender) {
      userGender.push(user.name);
    }
  })
  return userGender;
};
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]



// Задание 4
// Получить массив только неактивных пользователей (поле isActive).

// const getInactiveUsers = users => {
//   const userInactive = [];
//   users.forEach(user => {
//     if (!user.isActive) {
//       userInactive.push(user);
//     }
//   })
//   return userInactive;
// };
// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

const getInactiveUsers = users => users.filter(user => !user.isActive);
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]



// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).

// const getUserWithEmail = (users, email) => {
//   let userWithEmail;
//   users.forEach(user => {
//     if (user.email === email) {
//       userWithEmail = user;
//     }
//   })
//   return userWithEmail;
// };
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

const getUserWithEmail = (users, email) => users.find(user => user.email === email);
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}



// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

// const getUsersWithAge = (users, min, max) => {
//   const usersWithAge = [];
//   users.forEach(user => {
//     if (user.age > min && user.age < max) {
//       usersWithAge.push(user)
//     }
//   })
//   return usersWithAge;
// };
// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log(getUsersWithAge(users, 30, 40)); // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

const getUsersWithAge = (users, min, max) => users.filter(user => user.age > min && user.age < max)
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40)); // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]



// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.

// const calculateTotalBalance = users => {
//   let totalBalance = 0;
//   users.forEach(user => {
//     totalBalance += user.balance;
//   })
//   return totalBalance;
// };
// console.log(calculateTotalBalance(users)); // 20916

const calculateTotalBalance = users => users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
console.log(calculateTotalBalance(users)); // 20916



// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  const usersWithFriend = [];
  users.forEach(user => {
    if (user.friends.includes(friendName)) {
      usersWithFriend.push(user.name);
    }
  })
  return usersWithFriend;
};
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]



// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const sortByFriendsQuantity = (a, b) => a.friends.length - b.friends.length;
const getNamesSortedByFriendsCount = users => users.map(user => user.name);
console.log(getNamesSortedByFriendsCount(users.sort(sortByFriendsQuantity)));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]



// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы 
// в алфавитном порядке.

const getSortedUniqueSkills = users => 
  users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    
    const sortedSkills = [];
    allSkills.sort().forEach(skill => {
      if (!sortedSkills.includes(skill)) {
        sortedSkills.push(skill)
      }
    });
    return sortedSkills;
  }, []);
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum',
//   'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]