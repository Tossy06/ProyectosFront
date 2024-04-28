// creación de comida
const playBoard = document.querySelector(".tab");

// Posición de la comida
let foodx , foody ;

//Snake
let snakex= 5, snakey = 10;
let snakeBody = [];
let speedx = 0, speedy = 0;




//Random position food
const changePositionFood = () =>{
    foodx = Math.floor(Math.random() * 19) + 1;
    foody = Math.floor(Math.random() * 19) + 1;
}

//Direction snake
const changeDirection = (e) =>{
    if(e.key === "ArrowUp"){
        speedx = 0;
        speedy = -1;
    }
    else if(e.key === "ArrowDown"){
        speedx = 0;
        speedy = 1;
    }
    else if(e.key === "ArrowLeft"){
        speedx = -1;
        speedy = 0;
    }
    else if(e.key === "ArrowRight"){
        speedx = 1;
        speedy = 0;
    }
}



const initGame = () => {
    // Generar el markup HTML para la comida
    let htmlMarkup = `<div class="food" style="grid-column: ${foodx}; grid-row: ${foody};"></div>`;
    
    if (snakex === foodx && snakey === foody) {
        changePositionFood();
        snakeBody.push([snakex, snakey]); // Agrega el nuevo segmento al final del arreglo snakeBody
    }
    //Hacer que el cuerpo siga a la cabeza
    for(let i =snakeBody.length -1; i > 0; i--){
        snakeBody[i] = snakeBody[i - 1];
       
    } 
    
    snakex += speedx;
    snakey += speedy;
    snakeBody [0] = ([snakex, snakey]);
    // Generar el markup HTML para cada segmento del cuerpo de la serpiente
    for (let i = 0; i < snakeBody.length; i++) {
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]};"></div>`;
    }
    
    // Añadir el markup HTML al elemento playBoard
    playBoard.innerHTML = htmlMarkup;

    
}
changePositionFood();
setInterval(initGame, 200);
document.addEventListener("keydown", changeDirection);

