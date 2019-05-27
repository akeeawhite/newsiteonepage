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
