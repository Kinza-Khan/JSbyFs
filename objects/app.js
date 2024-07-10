// objects
// single dimensional object

// let data ={
//   name:"Aisha",
//   email:"aisha@gamil.com",
//   age:20,
//   gender:"female",
//   address:"Malir"
// }

// document.write(data.address + " " + data.email)

// for(let i in data){
//   // document.write(i + "<br>");

//   document.write(data[i] + "<br>");
// }


// multiple dimensional object

let data = [

  {
  name:"Aisha",
  email:"aisha@gamil.com",
  age:20,
  gender:"female",
  address:"Malir"
},

{
  name:"iqra",
  email:"aiqra@gamil.com",
  age:25,
  gender:"female",
  address:"DHA"
},

{
  name:"Fizza",
  email:"fizza@gamil.com",
  age:28,
  gender:"female",
  address:"Defence"
},

{
  name:"Muhib",
  email:"muhib@gamil.com",
  age:6,
  gender:"male",
  address:"Nazimabad"
}

]


// document.write(data[2].email + " " + data[0].name);


for(let i in data){
  document.write(data[i].email + "<br>")
}


// for(let i in data){
//   for(let a in i){
//     document.write(data[ia].email + "<br>")
//   }
// }






