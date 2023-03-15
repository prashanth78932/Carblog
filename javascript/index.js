var userId="ramu@gmail.com"
var pass="123"
function logintowebpage()
{
    var userGivenID=document.getElementById("usid").value
    var userGivenPass=document.getElementById("pass").value
    if(userId==userGivenID && pass==userGivenPass)
    {
        var fom=document.forms
        fom[0].action="./html/home.html"
        fom[0].elements[2].type="submit"
    }
    else if(userId==userGivenID && pass!=userGivenPass)
    {
        document.getElementById("result").innerHTML="Entered Wrong Password"
        document.getElementById("passdiv").style.borderColor="red"
        document.getElementById("emaildiv").style.borderColor="ROYALBLUE"
        document.body.style.backgroundImage="linear-gradient(75deg,GRAY,red)"
    }
    else if(userId!=userGivenID && pass==userGivenPass)
    {
        document.getElementById("result").innerHTML="Entered Wrong UserId "
        document.getElementById("passdiv").style.borderColor="ROYALBLUE"
        document.getElementById("emaildiv").style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(75deg,red,SILVER)"   
    }
    else{
        document.getElementById("result").innerHTML="Entered Wrong UserId and password"
        document.getElementById("passdiv").style.borderColor="red"
        document.getElementById("emaildiv").style.borderColor="red"
        document.body.style.backgroundColor="red" 
        document.body.style.backgroundImage="none" 
    }
}
function passvis()
{
    document.getElementById("pass").removeAttribute("type")
    document.getElementById("visible").setAttribute("src","./assets/logos/openeye.png")
    document.getElementById("visible").style.transform="rotateY(360deg)"
    document.getElementById("visible").style.transition="transform 0.3s"
}
function passhide()
{
    document.getElementById("pass").setAttribute("type","password")
    document.getElementById("visible").setAttribute("src","./assets/logos/closeeye.png")
    document.getElementById("visible").style.transform="rotateY(-360deg)"
    document.getElementById("visible").style.transition="transform 0.3s"
}