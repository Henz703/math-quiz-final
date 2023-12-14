function addUser(){
p1_name = document.getElementById("p1-login").value;
p2_name = document.getElementById("p2-login").value;

localStorage.setItem("p1_name",p1_name);
localStorage.setItem("p2_name",p2_name);

window.location = "game_page.html";

}
