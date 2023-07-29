var loginemail = document.querySelector("input[name='login email']")
var loginpass = document.querySelector("input[name='login password']")
var loginbtn = document.getElementById("loginbtn")
var logoutbtn = document.querySelector(".logout")
var username = document.getElementById(username)
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
      }
      else{
         window.alert('please enter a valid email and password')
      }
   }
   return x
}
function showname(index){
username.innerHTML = ahmed
}
loginbtn.addEventListener('click', function(){   
   checklogin(loginemail.value,loginpass.value)
})
logoutbtn.addEventListener("click",function(){
   window.open('index.html',"_self");
})