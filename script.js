let headsCount = 0;
if(localStorage.getItem('headsCount') !== null){
    headsCount = parseInt(localStorage.getItem('headsCount'))
}


let tailsCount = 0;
if(localStorage.getItem('tailsCount') !== null){
    tailsCount = parseInt(localStorage.getItem('tailsCount'))
}

updateDom() 


document.querySelector("#flip-btn").addEventListener("click", function(){
    //flip the penny
    let isHeads = Math.random() > 0.5

    if(isHeads) {
        document.querySelector(".penny-img").src = "./assets/images/penny-heads.jpg"
        document.querySelector(".result-header").textContent = 'You Flipped Heads!'
        headsCount++;
    } else {
        document.querySelector(".penny-img").src = "./assets/images/penny-tails.jpg"
        document.querySelector(".result-header").textContent = 'You Flipped Tails!'
        tailsCount++;
    }

    localStorage.setItem('headsCount', headsCount)
    localStorage.setItem('tailsCount', tailsCount)

    updateDom() 

})


document.querySelector('#clear-btn').addEventListener("click", function(){
    
    document.querySelector(".penny-img").src = "./assets/images/penny-heads.jpg"
    document.querySelector(".result-header").textContent = "Let's Get Rolling!"

    headsCount = 0;
    tailsCount = 0;
    localStorage.setItem('headsCount', headsCount)
    localStorage.setItem('tailsCount', tailsCount)

    updateDom() 
})



function updateDom() {
    document.querySelector(".heads-counter").textContent = headsCount

    document.querySelector(".tails-counter").textContent = tailsCount

    let total = headsCount + tailsCount
    let percentageHeads = 0
    let percentageTails = 0
    if (total > 0) {
        percentageHeads = Math.round(headsCount/total * 100)
        percentageTails = Math.round(tailsCount/total * 100)
    }


    document.querySelector('.heads-percentage').textContent = percentageHeads + '%'
    document.querySelector('.tails-percentage').textContent = percentageTails + '%'
}