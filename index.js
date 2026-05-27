// console.log("Hello World!!")

// function openTab()
// {
//     // page = window.open('https://www.google.com/',"_blank","width=786, height=786")
//     page = window.open('',"_blank","width=786, height=786")
//     page.document.write("<h2>I am the opened tab</h2>")
// }

// function closeTab()
// {
//     page.close()
// }

// function confirmButton()
// {
//     let response = confirm("Are you sure? You want to submit?")

//     if(response)
//     {
//         window.open("https://www.google.com/#view=/doodles/")
//     }

//     else
//     {
//         let age = window.prompt("Enter your age:")
//         console.log(age)
//     }
// }

// function createAdd()
// {
//     let div = document.createElement("div")
//     div.setAttribute('id','offer')
//     div.innerHTML='<h1>Grab this offer!!</h1>'
//     document.body.appendChild(div)
// }

// setTimeout(()=>{
//     createAdd()
// },5000)

// setTimeout(()=>{
//     let div = document.getElementById('offer')
//     div.remove()
// },10000)

// let count = 0;
// let h = 0;
// let m = 20;
// let s = 60

// setInterval(() => {
//     s--
//     if(s==0)
//     {
//         m--
//         s=59
//     }

//     let timer = document.getElementById('timer')
//     timer.innerHTML = `Offer ends in ${h}<sub>HH</sub> ${m}<sub>MM</sub> ${s}<sub>SS</sub>`
// }, 1000);

