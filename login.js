

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
     
     
    if ($("#user").val()==""|| $("#password").val()=="")
    {
        $("p").html("<h2>Enter the credentials</h2>")
        $("p").css("size:5px")

    }
    else if ($("#user").val()=="admin" &&  $("#password").val()=="12345")
    {
        setTimeout(function()
        {
            $("p").html("<h2> Success</h2>")
        },3000);
       

        setTimeout(function()
        {
            $(p).html("<h2> Verification in process</h2>");
        },3000);
        
        access (todo)
    }
    else{
        $("p").html("<h2>wrong credentials</h2>")

    }
    function access(callback)
    {
        alert("LOGIN Sucessfull");
        callback()
    }
     })

})



