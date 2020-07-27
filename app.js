function validateForm() {
    let X = document.forms["myPortal"]["userName"].value;
    let Y = document.forms["myPortal"]["passWord"].value;
    if ((X === null || X === "" || X === 'undefined' && Y === null || Y === "")) {
        alert("This field must be filled!!!");
        return false;
    } 
    else {
        alert(`Hi ${X}`);
        return true;
    }
}