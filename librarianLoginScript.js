const login = document.querySelector(".form-container")
console.log(login)

login.addEventListener("submit", async(e) => {
   e.preventDefault();

   const username = document.querySelector(".username").value;
   const password = document.querySelector(".password").value;

   try{
   const response = await fetch("http://localhost:8080/login-admin", {

      method: "POST",
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username, password: password})
   })

   if(response.ok){
      const feedback = await response.text();
      alert(`successfully logged in ${username}`)
      window.location.href = "../librariandashboard.html"
   }else{
      const error = await response.text();
      alert(error)
   }
   }
   catch(error){
      alert(error.message)
   }

})