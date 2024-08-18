const title = document.querySelector(".form-container")
console.log(authour)

title.addEventListener("submit", async(e) => {
    e.preventDefault();

    const author = document.querySelector(".title");

    try{
    const response = await fetch("http://localhost:8080/get-books-by-title/{{title}}", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify({author: author})
    })

    if(response.ok){
        const feedback = await response.text();
        alert(feedback)
        // window.location.href = 
    }

    else{
        const error = await response.text();
        alert(error);
    }}
    catch(err){
        alert(err.message)
    }
})
