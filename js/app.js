
function val(){
    var name = document.getElementById("name-input");
    var lname = document.getElementById("lname-input");
    var email = document.getElementById("email-input");
    var dateImput = document.getElementById("dt");
    var valid = false;

    //if the fields are empty...
    if(valCamp(name)){
        valid = true;
        clearError1();
    }else{
        valid = false;
        fieldError1();
    }
    if(valCamp(lname)){
        valid = true;
        clearError2();
    }else{
        valid = false;
        fieldError2();
    }
    if(valEmail(email)){
        valid = true;
        clearFieldEmail()
    }else{
        valid = false;
        fieldErrorEmail();
    }
    if(valCamp(dateImput)){
        valid = true;
        clearErrorDate()
    }else{
        valid = false;
        fieldErrorDate();
    }

    return valid;


}

function fieldError1(){
    document.getElementById("error").style.display = "block";
    document.getElementById("name-input").style.borderColor = "red";
    document.getElementById("msj-error").innerHTML = "This field is empty*";
}
function fieldError2(){
    document.getElementById("error2").style.display = "block";
    document.getElementById("lname-input").style.borderColor = "red";
    document.getElementById("msj-error2").innerHTML = "This field is empty*";
}
function fieldErrorEmail(){
    document.getElementById("error3").style.display = "block";
    document.getElementById("email-input").style.borderColor = "red";
    document.getElementById("msj-error3").innerHTML = "It's not a valid email";
}
function fieldErrorDate(){
    document.getElementById("error4").style.display = "block";
    document.getElementById("dt").style.borderColor = "red";
    document.getElementById("msj-error4").innerHTML = "It's not a valid date";
}

function clearError1(){
    document.getElementById("error").style.display = "none";
    document.getElementById("name-input").style.borderColor = "";
    document.getElementById("msj-error").innerHTML = "";
}
function clearError2(){
    document.getElementById("error2").style.display = "none";
    document.getElementById("lname-input").style.borderColor = "";
    document.getElementById("msj-error2").innerHTML = "";
}
function clearFieldEmail(){
    document.getElementById("error3").style.display = "none";
    document.getElementById("email-input").style.borderColor = "";
    document.getElementById("msj-error3").innerHTML = "";
}
function clearErrorDate(){
    document.getElementById("error4").style.display = "none";
    document.getElementById("dt").style.borderColor = "";
    document.getElementById("msj-error4").innerHTML = "";
}

function valCamp(boxElement){
    var campValue = boxElement.value.trim();
    if(campValue != ""){
        return true;
    }else{
        return false;
    }
}

function valEmail(){
     var email = document.getElementById("email-input").value.trim();
     if(email != ""){
         if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            return true;
         }else{
             return false;
         }  
     }else{
     return true;
    }
}

function handler(e){
    date = new Date(e.target.value);
    dateToday = new Date();

    
    if(date.getUTCFullYear() > 2000){
        
        nbb();
    }else{

        if (date.getUTCFullYear() == 2000){

            if(date.getUTCMonth() < dateToday.getMonth()){
                
                bbn();
            }else{

                if(date.getUTCMonth() == dateToday.getMonth()){

                    if(date.getUTCDate() <=  dateToday.getDate()){

                        bbn();
                    }else{
                        nnb();
                    }
                }
            }
        }else{
            if(date.getUTCFullYear() < 2000){
                bbn();
            }
            
        }   
    } 
}

function bbn(){
    document.getElementById("drink").style.display = "block";
    document.getElementById("hobbies").style.display = "block";
    document.getElementById("like").style.display = "none"; 
}

function nbb(){
    document.getElementById("drink").style.display = "none";
    document.getElementById("hobbies").style.display = "block";
    document.getElementById("like").style.display = "block"; 
}

function drinkYes(){

    document.getElementById("smoke").style.display = "block";
}
function drinkNo(){

    document.getElementById("smoke").style.display = "none";
}
