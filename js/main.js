
var loginemail = document.querySelector("input[name='login email']")
var loginpass = document.querySelector("input[name='login password']")
var loginbtn = document.getElementById("loginbtn")
var username = document.getElementById(username)
let hellouser 
var datacontainer = []
var x=0
if (localStorage.getItem('data') != null) {
   datacontainer = JSON.parse(localStorage.getItem('data'))
}
else {
   datacontainer = [];
}
  function checklogin(mail , password){
   for(var i=0; i<datacontainer.length; i++){
      if(mail==datacontainer[i].email && password==datacontainer[i].password){
         window.open('hello.html',"_self");
         hellouser = datacontainer[i].name
      }
      else{
         window.alert('please enter a valid email and password')
      }
   }
}
loginbtn.addEventListener('click', function(){   
   checklogin(loginemail.value,loginpass.value)
})