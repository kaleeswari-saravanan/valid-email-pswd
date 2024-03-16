const nameInput=document.querySelector("#name");
const email=document.querySelector("#email");
const pswd=document.querySelector("#pswd");
const cpswd=document.querySelector("#cpswd");
const success=document.querySelector("#success");
const errorNodes=document.querySelectorAll(".error");

function validateForm()
{
    clearmessage();
    let errorFlag=false;
    if(nameInput.value.length<1)
    {
        errorNodes[0].innerText="Name cannot be blank";
        errorFlag=true;
    }
    if(!emailIsValid(email.value))
    {
        errorNodes[1].innerText="Invalid Email";
        errorFlag=true;
    }
    if(pswd.value.length<8)
    {
        errorNodes[2].innerText="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
        errorFlag=true;
    }
    if(cpswd.value.length<8)
    {
        errorNodes[3].innerText="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
        errorFlag=true;
    }
    if(errorFlag==false)
    {
        success.innerText="Registration Successfull";
    }


}
function emailIsValid(email)
{
    let pattern=/\S+@\S+\.\S+/;
    return pattern.test(email);
}
/* function pswdValid(pswd)
{
    let pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
    return pattern.test(pswd);
}
function pswdValid1(cpswd)
{
    let pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
    return pattern.test(cpswd);
} */

function clearmessage()
{
    for (var i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerHTML = '';
      }

}