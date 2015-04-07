function validate() {
    var email = $("#exampleInputEmail1").val();

    var emailFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    

    if (!emailFilter.test(email)) {
        alert('Please enter a valid e-mail address.');
        return false;
    }

    return true;
}

document.getElementById('signIn').onsubmit = validate;