var inputSignin = document.getElementById("pWord");
inputSignin.addEventListener("keyup", function(event) {
    if (event.keyCode === 13){
        event.preventDefault();
        document.getElementById("loginBtn").click(null);
    }
});

var callLoginAPI = (userName,password)=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({"userName":userName,"password":password});
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    // if(typeof(Storage) !== "undefined"){
    //     sessionStorage.setItem("name", document.getElementById("uName"));
    // } else{
    //     alert("Error: Browser does not support Web Storage");
    // }

    fetch("https://vsuutxu3m9.execute-api.ap-southeast-1.amazonaws.com/dev", requestOptions)
    .then(response => response.json())
    .then(function(data){
        let code = data.statusCode;
        if(code === 200){
            location.replace("./redirect.html");
        }else if(code === 403){
            alert("Wrong username or password");
        }else if(code === 404){
            alert("User not found");
        }
    })
    .catch(error => console.log('error', error));

    
}