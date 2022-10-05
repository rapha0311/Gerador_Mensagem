document.getElementById('button').addEventListener("click", sortear)



function sortear() {
    tirarUmAdviceDoPote()
}

async function gerarPoteAdvice() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json()



}

async function tirarUmAdviceDoPote() {
    const msg = await gerarPoteAdvice()
    const id = msg.slip.id
    const txtAdvice = msg.slip.advice
    document.getElementById('idAdvice').innerHTML = `${id}`
    document.getElementById('txtAdvice').innerHTML = `"${txtAdvice}"`
    
    


}

gerarPoteAdvice()
tirarUmAdviceDoPote()

