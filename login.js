

$(document).ready(function(){

    function todo()
    {
        setTimeout (function(){
        window.location.replace("todo.html"); 
        },3000);
        // to change the location while clicking the button
    }
    $("#btn").click(function(e){
        e.preventDefault();
        // method in jQuery to stop the default action of selected element to occur.
     
        //         validating username and password
     
    if ($("#user").val()==""|| $("#password").val()=="")
    {
        $("p").html("<h5>Enter the credentials</h5>")
        $("p").css("size:5px")

    }
//         when the username and password is empty,it must show a message like"enter the credentials.for this we are selecting the id names of user input and password input and
//         we are using .val(),an inbuilt method in jQuery which set the value of them as empty.

        
    else if ($("#user").val()=="admin" &&  $("#password").val()=="12345")
    {
        setTimeout(function()
        {
            $("p").html("<h5> Success</h5>")
        },3000);
 $("p").css("color:green")
       

        setTimeout(function()
        {
            $(p).html("<h5> Verification in process</h5>");
        },3000);
        
        access (todo)
    }
    else{
        $("p").html("<h2>wrong credentials</h2>")
         $("p").css("color:red")

    }
    function access(callback)
    {
        alert("LOGIN Sucessfull");
        callback()
    }
     })

})



