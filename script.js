async function getMensage(){

    try{
    const api = await axios.get('https://api.adviceslip.com/advice')
    const mensagem = api.data.slip.advice
    console.log(mensagem)
    let response = document.querySelector("#mensagem-camp")
    response.innerHTML = ""
    console.log(response)
    let teste = document.createElement("p")
    teste.innerHTML = mensagem
    response.appendChild(teste)
    }catch(error){
        console.log(error)
    }
}