$("#signupButton").on("click", function () {

    event.preventDefault();

    console.log("fuck")

    var email = $("#signup").serializeArray()[0].value;
    var password = $("#signup").serializeArray()[1].value;
    // var first_name = $("#signup").serializeArray()[2].value;
    // var last_name = $("#signup").serializeArray()[3].value;
    // var age = $("#signup").serializeArray()[4].value;
    // var gender = $("#signup").serializeArray()[5].value;
    var data = {
        email: email,
        password: password,
        // first_name: first_name,
        // last_name: last_name,
        // age: age,
        // gender: gender
    };
    var url = 'http://localhost:5000/api/signup';

    $.ajax({
        type: "POST",
        url: url,
        data: data
    }).done(function (data, textStatus, request) {
        //try and send in app.use(express.static(__dirname + '/public/assets'));
        console.log("signup: ", data);

        if(data.success == true) {
            window.open("/profile", '_self', false);
        } else {
            $("#invalidSignup").html("Email already used")
        }
        
    });
});

$("#signinButton").on("click", function () {

        event.preventDefault();
        // debugger
        var email = $("#signin").serializeArray()[0].value;
        var password = $("#signin").serializeArray()[1].value;
        var data = {email: email, password: password};
        var url = 'http://localhost:5000/api/login';

        $.ajax({
            type: "POST",
            url: url,
            data: data
        }).done(function (data, textStatus, request) {
            
            console.log("signin: ", data)

            if(data.success == true) {
                window.open("/profile", '_self', false);
            } else {
                $("#invalid").html("Wrong username or password")
            }

        });
    });


