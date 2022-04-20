var nameerror=document.getElementById('name-error');
var phoneerror=document.getElementById('phone-error');
var emailerror=document.getElementById('email-error');
var submiterror=document.getElementById('submit-error');
var passworderror=document.getElementById('password-error');



function validatename()
    {
        var name = document.getElementById('contact-name').value;
        console.log(name);
        if (name.length==0) {
            nameerror.innerHTML="Name is required";
            return false;
        }
        if(!name.match(/^[a-zA-Z]*\s{1}[A-Za-z]*$/))
        {
            nameerror.innerHTML="Write full name";
            return false;
        }
        nameerror.innerHTML="valid"; 
        return true;
        
    }


    function validatephone()
    {
        var phone =document.getElementById('contact-phone').value;
        console.log(phone);
        if(phone.length==0){
            phoneerror.innerHTML='phone number must be required';
            return false;
        }
        
        if(!phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/))
        
        {
            phoneerror.innerHTML ="phone number is wrong";
            return false;

        }

       else if(phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/))
            phoneerror.innerHTML ="validated"
            return true;
        
    }

    function validateemail()
    {
        var email = document.getElementById('contact-email').value;
        console.log(email);
        if (email.length==0) {
            emailerror.innerHTML="email is required";
            return false;
        }
        if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
        {
            emailerror.innerHTML="email format is not  valid";
            return false;
        }
        if(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
        {
            emailerror.innerHTML="email format is valid";
            return true;
        }
    

    }
    
    function validatepassword()
    {
        var password = document.getElementById('pass').value;
        console.log(password);
        if (password.length==0) {
            passworderror.innerHTML="password is required";
            
        
            return false;
        }
        if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/))
        {
            passworderror.innerHTML="password format is not  valid";
            return false;
        }
        if(password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/))
        {
            passworderror.innerHTML="password format is valid";
            
            return true;
        }
        
    }
    
        
    