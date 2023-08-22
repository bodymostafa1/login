var Name = document.querySelector("input[name='name']")
var email = document.querySelector("input[name='email']")
var password = document.querySelector("input[name='password']")
var signupbtn = document.querySelector(".signup")
var loginemail = document.querySelector("input[name='login email']")
var loginpass = document.querySelector("input[name='login password']")
var loginbtn = document.getElementById("loginbtn")
var datacontainer = []
if (localStorage.getItem('data') != null) {
   datacontainer = JSON.parse(localStorage.getItem('data'))
}
else {
   datacontainer = [];
}
var data = {}
function checkemail(mail){
   for(i=0;i<datacontainer.length;i++){
      if(mail==datacontainer[i].email){
         window.alert('this email is already used')
         data = ''
         reset()
      }
   }
}
function reset() {
   Name.value = ``
   email.value = ``
   password.value = ``
}
function validateEmail(email) {
   var re = /\S+@\S+\.\S+/;
   return re.test(email);
 }
function getvalue(){
   data = {
      Name:Name.value,
      email:email.value,
      password:password.value
   }
   if(validateEmail(data.email)==false){
      window.alert('enter a valid email')
      data = ''
      reset()
   }
   checkemail(data.email)
if(data==''){

}
else{
datacontainer.push(data)
}
localStorage.setItem("data",JSON.stringify(datacontainer))
reset()
}
signupbtn.addEventListener('click', function(e){
getvalue()
})
