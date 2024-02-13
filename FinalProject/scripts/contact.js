function handleLogin() {
    let phone = document.getElementById("phone");
    let costumerText = document.getElementById("costumerText");
    let result = document.getElementById("result");

    if (phone.value.length >= 9) {
        if (costumerText.value.length >= 15)
         {
            result.innerHTML = "Your Message is Submitted";
            result.style.color = "white";
            result.style.backgroundColor = "Green";
            result.style.padding = "5px 10px 10px 5px";
            result.style.width = "220px";
            result.style.borderRadius = "10px";
            result.style.fontFamily = "font";
        } else {
            result.innerHTML = "Your Message should be at least 15 Characters long";
            result.style.color = "white";
            result.style.backgroundColor = "red";
            result.style.padding = "5px 10px 10px 5px";
            result.style.width = "420px";
            result.style.borderRadius = "10px";
            result.style.fontFamily = "font";
        }
     
} else {
    result.innerHTML = "Phone Number must be at least 9 Characters long";
    result.style.color = "white";
    result.style.backgroundColor = "red";
    result.style.padding = "5px 10px 10px 5px";
    result.style.width = "420px";
    result.style.borderRadius = "10px";
    result.style.fontFamily = "font";
}

}