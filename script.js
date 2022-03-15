const containerCursos = document.querySelector('.coursesSectioncoursesContainer')


const nextBtn = document.querySelector('#nextBtn')
const prevBtn = document.querySelector('#prevBtn')

let index = 0

nextBtn.addEventListener('click', () => goToNextImage())
prevBtn.addEventListener('click', () => goToPrevImage())

function changeCurso(){
    if(index < - 3){ 
        index = 0
    }
    if(index > 0){
        index = 0
    }
    containerCursos.style.transform = `translateX(${index*320}px)` 
}

function goToNextImage(){
    index--
    changeCurso()
}
function goToPrevImage(){
    index++
    changeCurso()
}