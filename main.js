// class users {
//   constructor(username, password, email, age) {
//     this.username = username;
//     this.password = password;
//     this.email = email;
//     this.age = age;
//   }

//   tcheckUser() {
//     usersdtails.map((user)=>{
//         if(user.username === this.username && user.password === this.password ) {
//             console.log(`hello mr: ${user.username}`);
//         }
//     })
//   }
//   changedtails(newpassword) {

//      usersdtails.map((user)=>{
//         if(user.username === this.username && user.password === this.password ) {
//             this.password = newpassword
//         }
//         return user
//     })
//     let xhr = new XMLHttpRequest();
//     xhr.open("PUT", "./planmyvlage");
//     xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     xhr.send(JSON.stringify({ users: usersdtails }))
// }

// }







// let userOne = new users('alaa',123456789,'ds@ds.com',20)
// document.querySelector('.One').onclick = ()=> {console.log(userOne.changedtails(985647));}















// let usersdtails = ''
// new Promise((istrue, isfalse) => {
//   let fetchdata = new XMLHttpRequest();
//   fetchdata.open("GET", "./planmyvlage.json");
//   fetchdata.send();
//   fetchdata.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       istrue(JSON.parse(fetchdata.responseText));
//     }
//   };
// }).then((data) => {
//     usersdtails = data.users
    
// });

let opennavbar = document.querySelector('.opennavbar')
let opensidbar = document.querySelector('.opensidbar')
let links = document.querySelector('.links')
let sidbar = document.querySelector('.sidbar')


opennavbar.onclick =  function () {
  links.classList.toggle('open')
}
opensidbar.onclick =  function () {
  sidbar.classList.toggle('open')
}


console.log();