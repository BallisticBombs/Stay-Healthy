var Adata = {
    helh: 100,
    cash: 0,
    skill: 0.00,
    damg: 0.001,
    newsAMT: 0,
    skillIncrease: 0.01,
    age: 0
}

var news = [
    'People have reported to be immortal as they have above 100 health.',
    'Our god is BallisticBombs.',
    'Theres 2 people in the world with infinite skill',
    'Theres a community for this city!',
    'Some people have seen the test.html site.',
    'People said that they saw people die instanly even with 1e45 health or more!',
    'The oldest person is BalisticBombs with the age count of Infinite days!?!?',
    '*gunshot* *gunshot* Shots fired! Shots fired, north east! Take cover!',
    'News take minutes to think of, but seconds to write.',
    'BallisticBombs is the richest!',
    'News do not depend on your current state of the game.',
    'Political News have been reported in china!',
    'People have suggested news to the God and they are proved to be true!'
]
var x = -1;

function live()  {
    // main
    Adata.helh -= Adata.damg;
    Adata.age += 0.001
    // updates
    document.getElementById("helh").innerHTML = Adata.helh.toFixed(2);
    document.getElementById("cash").innerHTML = Adata.cash.toFixed(2);
    document.getElementById("skill").innerHTML = Adata.skill.toFixed(2);
    document.getElementById("age").innerHTML = Adata.age.toFixed(2);
    document.getElementById("skillIncrease").innerHTML = Adata.skillIncrease.toFixed(2);
    document.getElementById("newsAMT").innerHTML = Adata.newsAMT;
    // functions
    check();
}

function checkLiveOrDie()  {// checks if you are allowed to live lol
    if(Adata.helh <= 0){    
        document.getElementById("helhDIS").textContent = "Game Over, You died."
        document.getElementById("cashDIS").textContent = "Game Over, You died."
        document.getElementById("skilDIS").textContent = "Game Over, You died."
        document.getElementById("dis").textContent = "Game Over, You died."
        document.getElementById("news").textContent = "Lmao you died???"
        document.getElementById("newsDIS").textContent = "Lmao you died???"
    } else if(Adata.helh >= 0){
        live()  ;
    }
}

setInterval(checkLiveOrDie, 10);

function newNews()  {
    const rand = Math.floor(Math.random() * news.length);
    const randNews = news[rand];
    Adata.newsAMT += 1;
    document.getElementById("news").textContent = randNews;
    document.getElementById("newsAMT").innerHTML = Adata.newsAMT;
}
setInterval(newNews, 3000)

function workout()  {
    Adata.skill += Adata.skillIncrease;
}

function check()  {
    if(Adata.skill >= 1){
        document.getElementById("btn2").style.visibility = "visible";
    }   
}

function getJob()  {
    if(Adata.skill >= 0.5){ // gives you cash but you lose skill
        Adata.skill -= 0.5;
        Adata.cash += 0.5;
    }
}

function buyHotdog()  {
    if(Adata.cash >= 0.99){
        Adata.cash -= 0.99;
        Adata.helh += 1;
    }
}