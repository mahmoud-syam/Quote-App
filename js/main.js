// window.alert('Hello')
// document.getElementById("demo").innerHTML="Mahmoud"
// console.log('Mahmoud')



// var userName = window.prompt("Enter your Name :")
// document.getElementById("demo").innerHTML= "Welcome " + userName



// var num1 = Number(window.prompt("Enter Your Number 1 :"))
// var num2 = Number(window.prompt("Enter Your Number 2 :"))
// var sum = num1 + num2
// document.getElementById("demo").innerHTML="The Result :" + sum


// var role= window.prompt("Enter your role : ")

// if(role = "admin" || role =="ADMIN" ){
//     console.log("go to admin page")

// } else if (role = "user" ){
//     console.log("go to user page")
// } else {
//     console.log("invalid ")
// }

// var options = ""
// for (var i = 1950; i < 2024; i++) {
//     options += "<option>" + i + "</option>"
// }
// document.getElementById('demo').innerHTML = options


// Assignment 1
// var num= Number( window.prompt("Enter your number : ")) ;
// document.getElementById("demo").innerHTML = "The Result :" + num

/*
function getAvg(num1,num2) {

    var sum = num1 + num2
    var result = sum  / 2
    window.prompt(result)

}

getAvg(10,20) // num1 ==> 10   , num2 ===> 20
*/

// function foo()
// {
//     function bar(){ return 3;}
//     return bar();
//     function bar(){return 8;}
// }
// alert(foo())

// var users = [
//     {
//         id: 1,
//         name: "Mahmoud"
//     },
//     {
//         id: 2,
//         name: "Mohamed"
//     },
//     {
//         id: 3,
//         name: "Ali"
//     }
// ]
// var cartona = ''
// for (var i = 0; i < users.length; i++) {
//     cartona += `
//     <tr>
//     <td>${users[i].id}</td>
//     <td>${users[i].name}</td>
//     </tr>

//     `
// }
// document.getElementById('demo').innerHTML = cartona


// Assignment 2 

var quotes = [
    {
        quote: "“Be yourself; everyone else is already taken.” </br> ― Oscar Wilde"
    },
    {
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” </br> ― Marilyn Monroe"
    },
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” </br> ― Albert Einstein"
    },
    {
        quote: "“So many books, so little time.” </br> ― Frank Zappa"
    },
    {
        quote: "“A room without books is like a body without a soul.” </br> ― Marcus Tullius Cicero"
    },
    {
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” </br> ― Bernard M. Baruch"
    },
    {
        quote: "“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”"
    },
    {
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” </br> ― Dr. Seuss"
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.” </br> ― Mae West"
    }
];

var addQuote = ''

function addQuotes() {

    document.getElementById('quote').innerHTML = `
    ${quotes[Math.floor(Math.random() * quotes.length)].quote}
    `
}
addQuotes();