async function getMensage(){

    try{
        const api = await axios.get('https://api.adviceslip.com/advice')
        const mensagem = api.data.slip.advice
        let response = document.querySelector("#mensagem-camp")
        response.innerHTML = ""
        let addElemente = document.createElement("p")
        addElemente.innerHTML = mensagem
        response.appendChild(addElemente)
    }catch(error){
        console.log(error)
    }
}