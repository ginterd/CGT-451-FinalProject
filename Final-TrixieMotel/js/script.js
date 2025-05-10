// Counter Program

//Margarita Const

const decreaseBtnMargarita = document.getElementById("decrease-btn-margarita");
const resetBtnMargarita = document.getElementById("reset-btn-margarita");
const increaseBtnMargarita = document.getElementById("increase-btn-margarita");


//Mojito Const

const decreaseBtnMojito = document.getElementById("decrease-btn-mojito");
const resetBtnMojito = document.getElementById("reset-btn-mojito");
const increaseBtnMojito = document.getElementById("increase-btn-mojito");


//Spritz Const
const decreaseBtnSpritz = document.getElementById("decrease-btn-spritz");
const resetBtnSpritz = document.getElementById("reset-btn-spritz");
const increaseBtnSpritz = document.getElementById("increase-btn-spritz");


//Negroni Const
const decreaseBtnNegroni = document.getElementById("decrease-btn-negroni");
const resetBtnNegroni = document.getElementById("reset-btn-negroni");
const increaseBtnNegroni = document.getElementById("increase-btn-negroni");

//Cosmopolitan Const
const decreaseBtnCosmopolitan = document.getElementById("decrease-btn-cos");
const resetBtnCosmopolitan = document.getElementById("reset-btn-cos");
const increaseBtnCosmopolitan = document.getElementById("increase-btn-cos");

//Sun Salad Const
const decreaseBtnSalad = document.getElementById("decrease-btn-salad");
const resetBtnSalad = document.getElementById("reset-btn-salad");
const increaseBtnSalad = document.getElementById("increase-btn-salad");

//Pizza Const
const decreaseBtnPizza = document.getElementById("decrease-btn-pizza");
const resetBtnPizza = document.getElementById("reset-btn-pizza");
const increaseBtnPizza = document.getElementById("increase-btn-pizza");

//Burger Const
const decreaseBtnBurger = document.getElementById("decrease-btn-burger");
const resetBtnBurger= document.getElementById("reset-btn-burger");
const increaseBtnBurger = document.getElementById("increase-btn-burger");

//LGBTQ Const
const decreaseBtnLGBTQ = document.getElementById("decrease-btn-lgbtq");
const resetBtnLGBTQ= document.getElementById("reset-btn-lgbtq");
const increaseBtnLGBTQ = document.getElementById("increase-btn-lgbtq");


let count= 0;


//Margarita Counter

increaseBtnMargarita.onclick = function(){
    count++;
    countLabel.textContent=count;
}

decreaseBtnMargarita.onclick = function(){
    if (count > 0){
    count--;
    countLabel.textContent=count;
    }
}

resetBtnMargarita.onclick = function(){
    count = 0;
    countLabel.textContent=count;
}


//Mojito Counter

increaseBtnMojito.onclick = function(){
    count++;
    countLabel.textContent=count;
}

decreaseBtnMojito.onclick = function(){
    if (count > 0){
    count--;
    countLabel.textContent=count;
    }
}

resetBtnMojito.onclick = function(){
    count = 0;
    countLabel.textContent=count;
}


//Spritz Counter

increaseBtnSpritz.onclick = function(){
    count++;
    countLabel.textContent=count;
}

decreaseBtnSpritz.onclick = function(){
    if (count > 0){
    count--;
    countLabel.textContent=count;
    }
}

resetBtnSpritz.onclick = function(){
    count = 0;
    countLabel.textContent=count;
}

//Negroni Counter

increaseBtnNegroni.onclick = function(){
    count++;
    countLabel.textContent=count;
}

decreaseBtnNegroni.onclick = function(){
    if (count > 0){
    count--;
    countLabel.textContent=count;
    }
}

resetBtnNegroni.onclick = function(){
    count = 0;
    countLabel.textContent=count;
}


//Cosmopolitan Counter

increaseBtnCosmopolitan.onclick = function(){
    count++;
    countLabel.textContent=count;
}

decreaseBtnCosmopolitan.onclick = function(){
    if (count > 0){
    count--;
    countLabel.textContent=count;
    }
}

resetBtnCosmopolitan.onclick = function(){
    count = 0;
    countLabel.textContent=count;
}


// Salad Counter

increaseBtnSalad.onclick = function(){
    count++;
    countLabel.textContent=count;
}

decreaseBtnSalad.onclick = function(){
    if (count > 0){
    count--;
    countLabel.textContent=count;
    }
}

resetBtnSalad.onclick = function(){
    count = 0;
    countLabel.textContent=count;
}


//Pizza Counter

increaseBtnPizza.onclick = function(){
    count++;
    countLabel.textContent=count;
}

decreaseBtnPizza.onclick = function(){
    if (count > 0){
    count--;
    countLabel.textContent=count;
    }
}

resetBtnPizza.onclick = function(){
    count = 0;
    countLabel.textContent=count;
}

//Burger Counter

increaseBtnBurger.onclick = function(){
    count++;
    countLabel.textContent=count;
}

decreaseBtnBurger.onclick = function(){
    if (count > 0){
    count--;
    countLabel.textContent=count;
    }
}

resetBtnBurger.onclick = function(){
    count = 0;
    countLabel.textContent=count;
}


//LGBTQ Counter

increaseBtnLGBTQ.onclick = function(){
    count++;
    countLabel.textContent=count;
}

decreaseBtnLGBTQ.onclick = function(){
    if (count > 0){
    count--;
    countLabel.textContent=count;
    }
}

resetBtnLGBTQ.onclick = function(){
    count = 0;
    countLabel.textContent=count;
}


//Modal Order
  document.getElementById('order-btn').addEventListener('click', function () {
    const orderModal = new bootstrap.Modal(document.getElementById('order-modal'));
    orderModal.show();
  });

  document.getElementById('confirm-order-btn').addEventListener('click', function () {
    window.location.href = "index.html"; 
  });



// References 
// https://stackoverflow.com/questions/22402777/html-javascript-button-click-counter
// https://www.youtube.com/watch?v=uSJXZ3LkABE
// https://groups.google.com/g/androidscript/c/PqD0PwOEfzY?pli=1
// https://getbootstrap.com/docs/4.0/components/modal/
//https://www.youtube.com/watch?v=tt5uUMQgzl0
//https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage/40769912
//https://stackoverflow.com/questions/62827002/bootstrap-v5-manually-call-a-modal-mymodal-show-not-working-vanilla-javascrip