$(function(){
    $("#txt_username").keydown(function(){
        $("#userinfo").text("");
    });

    $("#btn_login").click(function(){
       // alert("Login button clicked!");
        var username = $('#txt_username').val();
        var password = $('#txt_password').val();
        var user = {username:username, password:password};
//        $.post('login',{user: JSON.stringify(user)}, processData);
        //$.post('login',{user: username}, processData);
        $.ajax({
            "url":"login",
            "type": "POST",
            "data":"{user:" + username + "}",
            "success": processData,
            "error": ajaxFailure
        })

    });


    function processData(data){
        //data = JSON.parse(data);

        //alert(data);
        console.log(data);
        var serverResponse = parseInt(data);
        if (serverResponse) {
            $('#userinfo').text("Login successful. " + data);
        } else {
            $('#userinfo').text("Try again! " + data);
        }

    }

    function ajaxFailure(data){
        console.log(xhr, status, exception);
    }

})

