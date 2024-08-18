const authour = document.querySelector(".form-container")
console.log(authour)

authour.addEventListener("submit", async(e) => {
    e.preventDefault();

    const author = document.querySelector(".author");

    try{
    const response = await fetch("http://localhost:8080/get-book-by-author/{{author}}", {
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
