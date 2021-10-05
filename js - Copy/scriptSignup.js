var inputSignUp = document.getElementById("pWord");
inputSignUp.addEventListener("keyup", function(event) {
    if (event.keyCode === 13){
        event.preventDefault();
        document.getElementById("signupBtn").click();
    }
});

var callAPI = (userName,password)=>{
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({"userName":userName,"password":password});
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://tuvau7hio4.execute-api.ap-southeast-1.amazonaws.com/dev", requestOptions)
    .then(response => response.json())
    .then(function(data){
        let code = data.statusCode;
        if(code === 200){
            location.replace("./redirect.html");
        }else if(code === 403){
            alert("Username already taken, please choose another one");
        }
    })
    .catch(error => console.log('error', error));
}