

//Product Idol,plaster page booking Form all field required and submitalert js......


//its for available idol form input required otherwise not submit-button work..

function checkavailablefields(){
    var name=document.getElementById("avlname");
    var contact=document.getElementById("avlcontact");


    if(name.value.trim()=="" ||contact.value.trim()=="")
        {
            alert("No blank values allowed....");
            return false;
        }
        else{
            alert("Thanks for order.We will contact you soon for confirmation");
             true;
        }
}




//its for custom idol form input required otherwise not submit-button work..

function checkcustomfields(){
    var name=document.getElementById("cstname").value.trim();
    var contact=document.getElementById("cstcontact").value.trim();
    var describe=document.getElementById("cstdescribe").value.trim();
    var height=document.getElementById("cstheight").value.trim();

    if(name=="" ||contact=="" ||describe=="" ||height=="")
        {
            alert("No blank values allowed....");
            return false;
        }
        else{
            alert("Thanks for Request.Your Request has been recorder.We will contact you soon for confirmation");
             true;
        }
}




//its for plaster order form input required otherwise not submit-button work..

function checkplasterfields(){
    var name=document.getElementById("plstrname").value.trim();
    var contact=document.getElementById("plstrcontact").value.trim();
    var quantity=document.getElementById("plstrquantity").value.trim();
    var location=document.getElementById("plstrlocation").value.trim();

    if(name=="" ||contact=="" ||quantity=="" ||location=="")
        {
            alert("No blank values allowed....");
            return false;
        }
        else{
            alert("Thanks for Request.Your Request has been recorder.We will contact you soon for delivery charges on your location.");
             true;
        }
}


//its for membership form input required otherwise not submit-button work..

function checkmemberfields(){
    var name=document.getElementById("memberrname").value.trim();
    var contact=document.getElementById("membercontact").value.trim();
    var pass1=document.getElementById("password1").value.trim();
    var pass2=document.getElementById("password2").value.trim();

     if(name=="" ||contact=="" ||pass1=="" ||pass2=="" ||(pass1!=pass2))
        {
            alert("No blank values allowed....");
            return false; 
        }
        else{
            alert("Thanks.....!!");
            true;
        }
        
}


//its for Login form input required otherwise not submit-button work..

function checkloginfields(){
    var user=document.getElementById("userenter").value.trim();
    var pass=document.getElementById("passenter").value.trim();

    if((user=="samet") && (pass=="123"))
        {
            alert("No blank values allowed....");
            return true;
        }
        else{
             false;
    
        }
}


//name validation using if else condition using boolean.......

function availablenamevalidation(str){
    Boolean=false;
    for(var i=0;i<str.length;i++)
        {
            if(!((str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90)||(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122)||(str.charCodeAt(i)==32)))
                {
                    Boolean=true;
                    break;
                }
        }
        if(Boolean)
            {
                document.getElementById("availablenamespan").innerHTML="Invalid Name";
                document.getElementById("availablenamespan").style.color="red";
                document.getElementById("availablenamespan").style.fontWeight="600";
                return false;
            }
            else{
                document.getElementById("availablenamespan").innerHTML="";
                true
            }
}


function customnamevalidation(str){
    Boolean=false;
    for(var i=0;i<str.length;i++)
        {
            if(!((str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90)||(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122)||(str.charCodeAt(i)==32)))
                {
                    Boolean=true;
                    break;
                }
        }
        if(Boolean)
            {
                document.getElementById("customnamespan").innerHTML="Invalid Name";
                document.getElementById("customnamespan").style.color="red";
                document.getElementById("customnamespan").style.fontWeight="600";
            }
            else{
                document.getElementById("customnamespan").innerHTML="";
            }
}



//number validation using if else condition with boolean......

function availablecontactvalidation(str){
    Boolean=false;
            for(var i=0;i<str.length;i++)
                {
                if(!((str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57) && (str.length==10) &&(str.charCodeAt(0)==55 || str.charCodeAt(0)==56 || str.charCodeAt(0)==57)))
                    {
                        Boolean=true;
                        break;
                    }
                }
                if(Boolean){
                  document.getElementById("availablecontactspan").innerHTML="Invalid Contact";
                  document.getElementById("availablecontactspan").style.color="red";
                  document.getElementById("availablecontactspan").style.fontWeight="600";
                }
                else
                {
                   document.getElementById("availablecontactspan").innerHTML=" ";
                }
        }



        function customcontactvalidation(str){
            Boolean=false;
                    for(var i=0;i<str.length;i++)
                        {
                        if(!((str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57) && (str.length==10) &&(str.charCodeAt(0)==55 || str.charCodeAt(0)==56 || str.charCodeAt(0)==57)))
                            {
                                Boolean=true;
                                break;
                            }
                        }
                        if(Boolean){
                          document.getElementById("customcontactspan").innerHTML="Invalid Contact";
                          document.getElementById("customcontactspan").style.color="red";
                          document.getElementById("customcontactspan").style.fontWeight="600";
                        }
                        else
                        {
                           document.getElementById("customcontactspan").innerHTML=" ";
                        }
                }

    




        //also use below function for number validation....
        //number validation using regular expression....
        //we also use below function for number validation and name validation.......

        //contactvalidation.........

        function contactvalidation1(str){
            (!((/^[0-9]+$/.test(str))&& (str.length==10) &&(str.charCodeAt(0)==55 || str.charCodeAt(0)==56 || str.charCodeAt(0)==57)))?document.getElementById("contactspan").innerHTML=color="Invalid":document.getElementById("contactspan").innerHTML="";
        }

        //namevalidation.........

        function namevalidation(str){
            (!(/^[a-zA-Z]/.test(str)))?document.getElementById("namespan").innerHTML="Invalid":document.getElementById("namespan").innerHTML="";
        }




   //Password validation function.......

   function passwordvalidation(str){
    let letter=0,digit=0,symbol=0;
     for(var i=0;i<str.length;i++)
        {
         if((str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90) ||(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122))
            {
                ++letter;
            }
            if(str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57)
                {
                    ++digit;
                }
             if(!((str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57)||(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90) ||(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122)))   
                {
                    ++symbol;
                }
        }
        if((digit>=3)&&(letter>=3)&&(symbol>=1))
            {
                document.getElementById("passwordspan").innerHTML="Strong Password !!!"
                document.getElementById("passwordspan").style.color="lime";
                document.getElementById("passwordspan").style.fontWeight="600";
            }
            else
            {
                document.getElementById("passwordspan").innerHTML="Weak Password.[letter>=3,digit>=3,symbol>=1]";
                document.getElementById("passwordspan").style.color="yellow";
                document.getElementById("passwordspan").style.fontWeight="500";
            }
   }
       
 


     //Password matching function......

        function passwordmatching(str){
            var str1=document.getElementById("password1").value;
            if(str===str1)
                {
                    document.getElementById("passmatchspan").innerHTML="Correct";
                    document.getElementById("passmatchspan").style.color="green";
                    document.getElementById("passmatchspan").style.fontWeight="500";
                }
                else
                {
                    document.getElementById("passmatchspan").innerHTML="Password Not Match";
                    document.getElementById("passmatchspan").style.color="red";
                    document.getElementById("passmatchspan").style.fontWeight="600";
                }
        }


        //using regular Expression Email vaildation.............

        function emailvalidation(str){
    
	      let reg=/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,3}$/g;
          //before @ conatain a-z,0-9,. after repeat then . and word 2 or 3...
          let result=str.match(reg);
         
           if(result!=null)
           { 
              document.getElementById("emailspan").innerHTML="";
           }
	       else{
            document.getElementById("emailspan").innerHTML="Invalid Email Address";
	       document.getElementById("emailspan").style.color="red";
          	}
        }





        //Bill function used in plaster form......

        function bill(){
            var b=document.getElementById("plstrquantity").value;
            var total=parseFloat(b)*110.45;
            document.getElementById("plstrtotalbill").value=total+" Rupes";
        }


    

        /*rate star functions*/

        function callratespanclear(){
            document.getElementById("ratereview").innerHTML=""
        }
        function callratespanshow(){
            document.getElementById("ratereview").innerHTML="Thanks for review..!";
        }


        /////for ligin form onkeyup event username and password span......

        function username(str){
            if(str!="SametArts"){
                document.getElementById("u").innerHTML="Invalid Username";
                document.getElementById("u").style.color="red";
            }
            else
            {
                document.getElementById("u").innerHTML="";
            }
        }

        function password(str){
            if(str!="Samet@2801"){
                document.getElementById("p").innerHTML="Invalid Password";
                document.getElementById("p").style.color="red";
            }
            else
            {
                document.getElementById("p").innerHTML="";
            }
        }


        //its function work on special page of justdial....
        //username and password is static thoose user input correct data then page redirect to justdial link page..

        function checkuserpasslogin(){
            event.preventDefault();
            var user=document.getElementById("userenter").value;
            var pass=document.getElementById("passenter").value;

            if(user == "SametArts" && pass == "Samet@2801")
                {
                    alert(" Success full....!!!"); 
                    window.location.assign("https://jsdl.in/DT-36U4AXUKGBQ");
                    //also use  window.location.href("https://www.justdial.com/Kolhapur/Samet-Arts-Near-Marathi-SchoolOpposite-Watar-Tank/0231PX231-X231-231024143517-J2S1_BZDET");
                }
                else{
        
                    document.getElementById("p").innerHTML="Please Enter Valid UserName and Password.....";
                    return false;
                }
        }


     //send data whatsapp to whatsapp.....

         function sendwhatsapp(){
            var name=document.getElementById("membername").value.trim();
            var contact=document.getElementById("membercontact").value.trim();
            var email=document.getElementById("memberemail").value.trim();
              
            var whatsappurl="https://wa.me/918080728294?text="
            +"*Name :* "+name+"%0a"
            +"*Contact :* "+contact+"%0a"
            +"*Email :* "+email+"%0a"
            +"This above data of new registered member of SAMET ARTS.";
            window.open(whatsappurl,'_blank').focus();
         }



  //whatsapp connect to contact form:-
  //Here we combine two function checkmemberfields and send whatsapp....
  //means we combine logic of two functions in one function using if else condition here we in if condition
  //add conditions of input otherwise return false.and else condition we write logic of send data to whatsapp.

  function checkmemberfieldssendwhatsapp(){

    var name=document.getElementById("membername").value.trim();
    var contact=document.getElementById("membercontact").value.trim();
    var email=document.getElementById("memberemail").value.trim();
    var pass1=document.getElementById("password1").value.trim();
    var pass2=document.getElementById("password2").value.trim();

    if(name=="" ||contact==""||email=="" ||pass1=="" ||pass2=="" ||(pass1!=pass2)){
          return false;
    }
    else{
        
        alert("Thanks.  We will send USERNAME and PASSWORD as earlier on your whatsapp for Log-In Samet Arts.");
    var whatsappurl="https://wa.me/918080728294?text="
    +"*Name :* "+name+"%0a"
    +"*Contact :* "+contact+"%0a"
    +"*Email :* "+email+"%0a"
    +"This is an data of new member of SAMET ARTS.";
    window.open(whatsappurl,'_blank').focus();
    }
  }

  
       