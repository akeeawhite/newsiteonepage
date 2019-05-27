//Validation for form

function validateText(id) 
{
    //If the fields are leave blank, an alert message will display
    if($("#"+id).val()==null || $("#"+id).val()=="")
    {
        alert("All fields are required!");
        return false;
    }
    else
    {
        return true;
    }
}
$(document).ready(


        function() 
        {
            $("#contactSend").click(function() 
            {
                if(!validateText("contactName"))
                {
                    return false;
                }
                if(!validateText("contactMail"))
                {
                    return false;
                }
                if(!validateText("contactSub"))
                {
                    return false;
                }
                if(!validateText("contactMessage"))
                {
                    return false;
                }

                $("form#contactForm").submit();
            });
        }


    );


    
    /*var $ = function (id) {return document.getElementById(id) ; }

var contactForm = function () {
    //Array of Fields
    this.fields = [];
    this.fields[contactName] = {};
    this.fields[contactEmail] = {};
    this.fields[contactSub] = {};
    this.fields[contactMessage] = {};

    this.fields["contactName"].message = "Must be include a first and last name.";
    this.fields["contactEmail"].message = "Must be a valid email address.";
    this.fields["contactSub"].message = "Must be a subject.";
    this.fields["contactMessage"].message = "Must be a message.";

}*/

/*function validateText() {
    var contactName = document.getElementById('contactName');
    //var contactEmail = document.getElementById('contactEmail');
    //var contactSubject = document.getElementById('contactSubject');
    //var contactMessage = document.getElementById('contactMessage'); 

    if(!contactName){
        alert('Please add the website name and address');
        return false;
    }
    //return true;
}*/

function validateForm() {
    var x = document.forms["contactForm"]["contactName"]["contactEmail"]["contactSubject"]["contactMessage"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
