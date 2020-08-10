
window.onscroll = myFunction;

function myFunction() {
   
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("sticky-nav").className="sticky";
    } else {
        document.getElementById("sticky-nav").className="";
    }
}

function onSubmitHandler (){
      var frms =document.getElementById ("enroll-form");
      var name=frms[0].value;
      var password= frms[1].value;
      var message =frms[2].value;
     function makerUser (name,password,message){
         this.name =name;
         this.password=password;
         this.message = message;
     };
     var user=new makerUser (name,password,message);
     var userJSon=JSON.stringify(user);
     var url= 'http://localhost:8080/selftaught/api-user';
     var xmlHttp=new XMLHttpRequest();
     xmlHttp.open("POST",url,true);
     xmlHttp.send(userJSon);
}