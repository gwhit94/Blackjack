let username;

document.querySelector("#submitButton").addEventListener("click", function(){
    document.querySelector("#radios-0").checked ? start() : exit();
});

function start(){
    console.log("START");
    username = document.querySelector("#username").value;
    console.log(username);
    document.querySelector(".landing").classList.add("d-none");
}
function exit(){
    console.log("EXIT");
    alert("You are not old enough to use this site, goodbye!");
    window.location.href = "https://en.wikipedia.org/wiki/Problem_gambling";
}