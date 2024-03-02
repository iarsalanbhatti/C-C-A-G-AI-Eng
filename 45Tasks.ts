// 1 Assignment (done)
// Installed Node.js, TypeScript and VS Code

// import { equal } from "assert";
// import { abort } from "process";

// 2 Assignment (done)
// let personName: string = "Ali";
// console.log("Hey " + personName + ", how was your class at governer house?");

// 3 Assignment (done)
// let personName: string = "alexander daniel";
// // let lowerCase: string = personName.toLowerCase();
// // console.log(lowerCase);
// // let upperCase: string = personName.toUpperCase();
// // console.log(upperCase);
// function titleCase(str: string) {
//     const yourSrtToArray = personName.toLowerCase().split(' ');
//     for (var i = 0; i < yourSrtToArray.length; i++) {
//         yourSrtToArray[i] = yourSrtToArray[i].charAt(0).toUpperCase() + yourSrtToArray[i].slice(1);
//     }
//     return yourSrtToArray.join(' ');
// }
// console.log(titleCase(personName));

// 4 Assignment (done)
// let quote: string = "Steve Jobs said," + '"Innovation distinguishes between a leader and a follower."';
// console.log(quote);

// 5 Assignment (done)
// let famousPerson: string = "Steve Jobs,";
// let message: string = famousPerson + '"Innovation distinguishes between a leader and a follower."';
// console.log(message);

// 6 Assignment (done)
// let personName: string = "\t Mudassir \n";
// let striping: string = personName.trim()
// console.log(striping);

// 7 & 8 Assignment (done)
// console.log(5 + 3); // addition operation
// console.log(10 - 2); // subtraction operation
// console.log(4 * 2); // multiplication operation
// console.log(16 / 2); // division operation

// 9 Assignment (done)
// let favoriteNumber: string = "5";
// console.log("My favorite number is " + favoriteNumber);

// 10 Assignment (done)
// My name is Arsalan
// 22/02/2023

// this program will print hello world statement
// let hello: string = "Hello World!";
// console.log(hello);

// this program will print an Array
// let arrayList: number[] = [1, 2, 3];
// console.log(arrayList)

// 11 Assignment (done)
// let friendsName: string[] = ["Mudassir", "Amir", "Ali"];
// for (let i = 0; i < friendsName.length; i++){
//     console.log(friendsName[i]);
// }

// 12 Assignment (done)
// let friendsName: string[] = ["Mudassir", "Amir", "Ali"];
// let message: string = ", Hello how are you? "
// for (let i = 0; i < friendsName.length; i++){
//     console.log(friendsName[i] + message);
// }

// 13 Assignment (done)
// let favoriteTransport: string[] = ["Jet", "Car", "Ship"];
// let statement: string = "I would like to own a ";
// for (let i = 0; i<favoriteTransport.length; i++)
// {
//     console.log(statement + favoriteTransport[i]);
//     }

// 14 Assignment (done)
// let guestList: string[] = ["Hamza Ali", "Irfan Baig", "Taseer Khan"];
// let invitationMessage: string = ", It is with great pleasure that I would like to invite you for a dinner ";
// for (let i = 0; i < guestList.length; i++) {
//     console.log(guestList[i] + invitationMessage);
// }

// 15 Assignment (done)
// let notAvailableGuest: string ="Taseer Khan"
// let sorryMessage: string = ", I would like to thank you for inviting me but i am unable to make it sorry! \n";
// console.log(notAvailableGuest + sorryMessage);
// let updatedGuestList: string[] = ["Hamza Ali", "Irfan Baig", "Tanveer Shah"];
// let SecondInvitationMessage: string = ", It is with great pleasure that I would like to invite you for a my birthday \n";
// for (let i = 0; i < updatedGuestList.length; i++)
// {
//      console.log(updatedGuestList[i] + SecondInvitationMessage );
//     }

// 16 Assignment (done)
// let Inform: string = "Luckly we have got more space let's invite more people";
// let updatedGuestList: string[] = ["Ali", "Hamza Ali", "Yasir", "Irfan Baig", "Tanveer Shah"];
// updatedGuestList.push("Sameer");
// let SecondInvitationMessage: string = ", It is with great pleasure that I would like to invite you for a my birthday \n";
// for (let i = 0; i < updatedGuestList.length; i++)
// {
//     console.log(updatedGuestList[i] + SecondInvitationMessage);
//    }

// 17 Assignment (done)
// let invitationMessage: string = " ,You are still invited!\n";
// let updatedGuestList: string[] = ["Ali", "Hamza Ali", "Yasir", "Irfan Baig", "Tanveer Shah"];
// updatedGuestList.push("Sameer");
// let sorryMessage: string = " , sorry i can’t invite you to dinner. \n";
// let removedGuest1 = updatedGuestList.pop();
// console.log(removedGuest1 + sorryMessage);
// let removedGuest2 = updatedGuestList.pop();
// console.log(removedGuest2 + sorryMessage);
// let removedGuest3 = updatedGuestList.pop();
// console.log(removedGuest3 + sorryMessage);
// let removedGuest4 = updatedGuestList.pop();
// console.log(removedGuest4 + sorryMessage);
// for (let i = 0; i < updatedGuestList.length; i++){
//     console.log(updatedGuestList[i] + invitationMessage);
// }
// let removedGuest5 = updatedGuestList.pop();
// let removedGuest6 = updatedGuestList.pop();

// 18 Assignment (done)
// let places: string[] = ["London", "Paris", "Rome", "Istanbul", "Amsterdam"];
// console.log(places);
// console.log([...places].sort());
// console.log(places);
// console.log([...places].sort().reverse());
// console.log(places);
// console.log(places.reverse());
// console.log(places.reverse());
// console.log(places.sort());
// console.log(places.sort().reverse());

// 19 Assignment (done)
// let invitationMessage: string = " ,You are still invited!\n";
// let updatedGuestList: string[] = ["Ali", "Hamza Ali", "Yasir", "Irfan Baig", "Tanveer Shah"];
// updatedGuestList.push("Sameer");
// let sorryMessage: string = " , sorry i can’t invite you to dinner. \n";
// let removedGuest1 = updatedGuestList.pop();
// // console.log(removedGuest1 + sorryMessage);
// let removedGuest2 = updatedGuestList.pop();
// // console.log(removedGuest2 + sorryMessage);
// let removedGuest3 = updatedGuestList.pop();
// // console.log(removedGuest3 + sorryMessage);
// let removedGuest4 = updatedGuestList.pop();
// // console.log(removedGuest4 + sorryMessage);
// for (let i = 0; i < updatedGuestList.length; i++){
//     // console.log(updatedGuestList[i] + invitationMessage);
// }
// let removedGuest5 = updatedGuestList.pop();
// let removedGuest6 = updatedGuestList.pop();
// console.log("number of people i am inviting to dinner are " + updatedGuestList.length);

// 20 Assignment (done)
// let cities: string[] = ["Karachi", "Lahore", "Multan", "Islamabad"];
// for (let i = 0; i < cities.length; i++){
//     console.log(cities[i])
// }

// 21 Assignment (done)
// let car: object;
// car = {
//     Company: "Toyota",
//     Model: "2024",
//     Transmission: "Automatic"
// };
// console.log(car);

// 22 Assignment (done)
// let arrayList: number[] = [1, 2];
// console.log(arrayList[list]);
// console.log(arrayList[0]);

// 23 Assignment (done)
// let car = "subaru";
// let company = "Honda";
// let num: number =  50;
// console.log('Is car == "subaru"? I predict True.');
// console.log(car == "subaru");
// 5 tests evaluate to True
// console.log("Is num == 50? I predict True.");
// console.log(num == 50);
// console.log("Is num !== 45? I predict True.");
// console.log(num !== 45);
// console.log("Is num > 45? I predict True.");
// console.log(num > 45);
// console.log("Is num < 60? I predict True.");
// console.log(num < 60);
// console.log("Is num <= 50? I predict True.");
// console.log(num <= 50);.
// tests evaluate to False
// console.log('Is car !== "subaru"? I predict False.');
// console.log(car !== "subaru");
// console.log('Is company == "subaru"? I predict False.');
// console.log(company == "subaru");
// console.log('Is car == company? I predict False.');
// console.log(car == company);
// console.log('Is car == "honda"? I predict False.');
// console.log(car == "honda");
// console.log('Is company !== "Honda"? I predict False.');
// console.log(company !== "Honda");

// 24 Assignment (done)
// let str1: string = "Hello";
// let num: number = 45;
// let num2: number = 50;
// let ary: number[] = [50, 45, 33];
// let find: number = 33;
// console.log(str1 == "Hello");
// console.log(str1 !== "Hello");
// console.log(str1 == "hello");
// console.log(num == 45);
// console.log(num !== 45);
// console.log(num > 40);
// console.log(num < 50);
// console.log(num >= 45);
// console.log(num <= 50);
// console.log(num == 45 && num2 == 50);
// console.log(num == 40 || num == 45);
// if (ary.includes(find)) {
//     console.log("item is in array");
// } else {
//     console.log("item is not in array");
// }

// 25 Assignment (done)
// let alienColor: string[] = ['green', 'yellow', 'red'];
// if (alienColor.includes("green")) {
//     console.log("the player just earned 5 points.");
// } else {

// }

// 26 Assignment (done)
// let alienColor: string[] = ['green', 'yellow', 'red'];
// if (alienColor.includes("green")) {
//     console.log("the player just earned 5 points.");
// } else {
//     console.log("the player just earned 10 points.");
// }
// if (alienColor.includes("black")) {
//     console.log("the player just earned 5 points.");
// } else {
//     console.log("the player just earned 10 points.");
// }

// 27 Assignment (done)
// let alienColor: string = "green";
// let alienColor: string = "yellow";
// let alienColor: string = "red";
// if (alienColor.includes("green")) {
//     console.log("the player just earned 5 points.");
// } else if (alienColor.includes("yellow")) {
//     console.log("the player just earned 10 points.");
// } else if (alienColor.includes("red")) {
//     console.log("the player just earned 15 points.");
// }

// 28 Assignment (done)
// let age: number = 25;
// if (age < 2) {
//     console.log("the person is a baby");
// } else if (age <= 2 || age < 4) {
//     console.log("the person is a toddler");
// } else if (age <= 4 || age < 13) {
//     console.log("the person is a kid");
// } else if (age <= 13 || age < 20) {
//     console.log("the person is a teenager");
// } else if (age <= 20 || age < 65) {
//     console.log("the person is an adult");
// } else if (age == 65) {
//     console.log("the person is an elder");
// }

// 29 Assignment (done)
// let favoriteFruit: string[] = ["apple", "mango", "orange", "banana", "watermelon"];
// if (favoriteFruit.includes("apple")) {
//     console.log("I really like apple!");
// }
// if (favoriteFruit.includes("mango")) {
//     console.log("I really like mango!");
// }
// if (favoriteFruit.includes("orange")) {
//     console.log("I really like orange!")
// }
// if (favoriteFruit.includes("orange")) {
//     console.log("I really like orange!")
// }
// if (favoriteFruit.includes("banana")) {
//     console.log("I really like banana!")
// }
// if (favoriteFruit.includes("watermelon")) {
//     console.log("I really like watermelon!")
// }

// 30 Assignment (done)
// let username: string[] = ["admin", "zain", "ali", "nasir", "amir"];
// if (username.includes("admin")) {
//     console.log("Hello admin, would you like to see a status report?");
// } else {
//     for (let i = 0; i < username.length; i++){
//         console.log("Hello, " + username[i] + " thank you for logging in again");
//     }
// }

// 31 Assignment (done)
// let users: string[] = [];
// if (users.length == 0) {
//
// console.log("We need to find some users!");
// }

// 32 Assignment (done)
// let currentUsers: string[] = ["Admin", "zain", "Ali", "nasir", "amir"];
// let newUsers: string[] = ["admin", "Zain", "imran", "Raheel", "mudassir"];
// function checkUsernameIsAvailable(username: string): void {
//     const usernameLower = username.toLowerCase();
//     if (currentUsers.some((user) => user.toLowerCase() === usernameLower)) {
//         console.error(`Sorry, the username "${username}" is already taken.`);
//     } else {
//         console.log(`The username "${username}" is available.`);
//     }
// }
// newUsers.forEach(checkUsernameIsAvailable);

// 33 Assignment (done)
// const numbersArry: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let ordinal: string;
// for (const num of numbersArry) {
//     if (num % 10 == 1 && num % 100 != 11) {
//         ordinal = "st";
//         console.log(num + ordinal);
//     } else if (num % 10 == 2 && num % 100 != 12) {
//         ordinal = "nd";
//         console.log(num + ordinal);
//     } else if (num % 10 == 3 && num % 100 != 13) {
//         ordinal = "rd";
//         console.log(num + ordinal);
//     }
//     else {
//         ordinal = "th";
//         console.log(num + ordinal);
//     }
// }

// 34 Assignment (done)
// const favoritePizza: string[] = ["BBQ chicken", "Pepperoni", "Fajita"];
// for (let i = 0; i < favoritePizza.length; i++){
//     console.log(favoritePizza[i]);
// }
// for (let i = 0; i < favoritePizza.length; i++){
//     console.log("I like " + favoritePizza[i] + "Pizza");
// }
// console.log("Pizza is the ultimate convenience food – it's quick, tasty, and always satisfying.");
// console.log("I really love pizza!");

// 35 Assignment (done)
// const animals: string[] = ["Rabbit", "Cat", "Dog"];
// for (let i = 0; i < animals.length; i++){
//     console.log(animals[i]);
// }
// for (let i = 0; i < animals.length; i++){
//     console.log("A " + animals[i] + " would make a great pet.");
// }
// console.log("Any of these animals would make a great pet!");

// 36 Assignment (done)
// function makeShirt(size:  string, message: string) {
//     console.log("You are wearing " + size + " size shirt with printed on it " + message);
// }
// makeShirt("small", "never give up");

// 37 Assignment (done)
// function makeShirt(size: string = "Large ", message: string = " I love TypeScript. ") {
//     console.log("Size is " + size  + message);
// }
// makeShirt();
// makeShirt("Medium");
// makeShirt("XL", " I love Pakistan");

// 38 Assignment (done)
// function describeCity(city: string, country: string = "Pakistan") {
//     console.log(city + " is in " + country) ;
// }
// describeCity("Karachi");
// describeCity("Lahore");
// describeCity("Chicago", "USA");

// 39 Assignment (done)
// function cityCountry(city: string, country: string) {
//     return `"${city}, ${country}"`;
// }
// console.log(cityCountry("Islamabad", "Pakistan"));
// console.log(cityCountry("Austin", "USA"));
// console.log(cityCountry("Cambridge", "UK"));

// 40 Assignment (done)
// function makeAlbum(artistName: string, albumTitle: string, tracks?: number) {
//     const album: object = {
//         "Artist Name": artistName,
//         "Album Title": albumTitle,
//         "Number of Tracks" : tracks
//     };

//     return album;
// }
// console.log(makeAlbum("Atif Aslam", "Doori"));
// console.log(makeAlbum("Nusrat Fateh Ali Khan", "Shahen-shah"));
// console.log(makeAlbum("Sajjad Ali", "Khareedar", 5));

// 41 Assignment (done)
// const magicianNames: string[] = ["David Blaine", "Lance Burton", "Derren Brown"];
// function showMagicians(magicians = magicianNames): void {
//     for (let i = 0; i < magicians.length; i++){
//         console.log(magicians[i]);
//     }

// }
// showMagicians();

// 42 Assignment (done)
// const magicianNames: string[] = ["David Blaine", "Lance Burton", "Derren Brown"];
// const theGreatPhrase: string = "The Great ";
// function makeGreat(theGreatMagicians: string[]): void {
//     for (let i = 0; i < theGreatMagicians.length; i++) {
//         theGreatMagicians[i] = theGreatPhrase + theGreatMagicians[i];
//     }
// }
// function showMagicians(magicians: string[]): void {
//     for (let i = 0; i < magicians.length; i++){
//         console.log(magicians[i]);
//     }
// }
// makeGreat(magicianNames);
// showMagicians(magicianNames);

// 43 Assignment (done)
// makeGreat(magicianNames);
// const newmMgicianNames: string[] = ["David Blaine", "Lance Burton", "Derren Brown"];
// showMagicians(newmMgicianNames);

// 44 Assignment (done)
// function sandwichItems(...item: string[]): void {
//     const sandwichSummary = "Your Order Summary: "
//     console.log(sandwichSummary)
//     for (let i = 0; i < item.length; i++){
//         console.log(item[i]);
//     }
// }
// sandwichItems("Egg", "cheese", "chicken");
// sandwichItems("cucumber", "chiles");
// sandwichItems("tender turkey,", "lettuce", "mustard");

// 45 Assignment (done)
// function carInfo(manufacturer: string, model: string, ...extraCarFeature: [string, string][]) {
//     const cardetails: { [key: string]: string } = { manufacturer, model };
//     extraCarFeature.forEach(([key, value]) => cardetails[key] = value);
//     return cardetails;
// }
// const carResult = carInfo("toyota", "gli", ["color", "blue"], ["feature", "sunroof"]);
// console.log(carResult);