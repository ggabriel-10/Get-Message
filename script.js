async function getMensage(){

    try{
        const api = await axios.get('https://api.adviceslip.com/advice')
        const mensagem = api.data.slip.advice
        let response = document.querySelector("#mensagem-camp")
        response.innerHTML = ""
        let addElement = document.createElement("p")
        addElement.innerHTML = mensagem
        response.appendChild(addElement)
    }catch(error){
        console.log(error)
    }
}