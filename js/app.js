
 


function val(){
    var name = document.getElementById("name-input");
    var lname = document.getElementById("lname-input");
    var email = document.getElementById("email-input");
    var valid = false;
    //if the fields are empty...
    
    if(valCamp(name)){
        valido = true;
    }else{
        valido = false;
        document.getElementById("error").style.display = "block";
        document.getElementById("name-input").style.borderColor = "red";
        document.getElementById("msj-error").innerHTML = "This field is empty*";
    }
    if(valCamp(lname)){
        valido = true;
    }else{
        valid = false;
        document.getElementById("error2").style.display = "block";
        document.getElementById("lname-input").style.borderColor = "red";
        document.getElementById("msj-error2").innerHTML = "This field is empty*";
    }
    if(valEmail(email)){
        valid = true;
    }else{
        document.getElementById("error3").style.display = "block";
        document.getElementById("email-input").style.borderColor = "red";
        document.getElementById("msj-error3").innerHTML = "It's not a valid email";

    }
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
     }
    
}

function handler(e){
    date = new Date(e.target.value);
    dateToday = new Date();

    
    if(date.getUTCFullYear() > 2000){
        document.getElementById("drink").style.display = "none";
        document.getElementById("hobbies").style.display = "none";
        document.getElementById("like").style.display = "block";
    }else{

        if (date.getUTCFullYear() == 2000){

            if(date.getUTCMonth() < dateToday.getMonth()){
                
                document.getElementById("drink").style.display = "block";
                document.getElementById("hobbies").style.display = "block";
                document.getElementById("like").style.display = "none";
            }else{

                if(date.getUTCMonth() == dateToday.getMonth()){

                    if(date.getUTCDate() <=  dateToday.getDate()){

                        document.getElementById("drink").style.display = "block";
                        document.getElementById("hobbies").style.display = "block";
                        document.getElementById("like").style.display = "none"; 
                    }
                }
            }
        }else{

            document.getElementById("drink").style.display = "block";
            document.getElementById("hobbies").style.display = "block";
            document.getElementById("like").style.display = "none";
        }   
    } 
}

function drink(){

    document.getElementById("smoke").style.display = "block";
}