function responsive() {
    var temp = document.getElementById("topNav");

    console.log(temp.className);

    if (temp.classname == "navbar") {
        temp.classname = "navbar_response";
    } else {
        temp.classname = "navbar"
    }

    console.log(temp.className);
}