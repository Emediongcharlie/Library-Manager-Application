const signUp = document.querySelector("#form-containerOne");
console.log(signUp)

signUp.addEventListener("submit", async(event) =>{
    event.preventDefault();
    const firstname = document.querySelector(".firstname").value;
    const lastname = document.querySelector(".lastname").value;
    const email = document.querySelector(".email").value;
    const username = document.querySelector(".username").value;
    const password = document.querySelector(".password").value;

    try {
    const response = await fetch("http://localhost:8080/register-admin", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({firstname:firstname, lastname:lastname, email:email, username:username, password:password})
    })

    if(response.ok){
        const feedback = await response.text();
        alert(`successfully registered ${username}`);
        window.location.href = "../librarianLogin.html"
    }else{
        const error = await response.text();
        alert(error)
    }}
    catch(error){
        alert(error.message)
    }

})
