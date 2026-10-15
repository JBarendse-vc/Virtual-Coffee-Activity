function validateForm() {
    let x = document.forms[cForm][fname].value;
    if (x==""){
        alert("Name must be filled out")
        return false;
    }
}