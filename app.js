let face_front = document.querySelectorAll(".face.front");
let Box = document.querySelectorAll(".counter .box");
let Time = document.querySelector(".time .tm");
let Score = document.querySelector(".score .sc");
let counter = document.querySelector(".counter");
let restart = document.querySelector("button.restart");
let best_score = document.querySelector(".best_score");
let arr = ["A", "B", "C", "D", "E", "F", "G", "H"];
let color = ["#2196f3", "#673ab7", "blue", "#009688", "green", "#e91e63", "violet", "gray"];
let coun = [];
coun.push(...dontRebeat())
coun.push(...dontRebeat());
let co = 0;
window.localStorage.clear()
if (window.sessionStorage.getItem("Score")) {
    
    best_score.textContent = window.sessionStorage.getItem("Score")
}
for (let i = 0; i < Box.length; i++){
face_front[i].textContent = coun[i]
}
face_front.forEach((e) => {
    switch (e.innerHTML) {
        case "A":
            e.style.color = color[0];
            e.style.backgroundColor = color[7]
            break;
        case "B":
            e.style.color = color[1];
            e.style.backgroundColor = color[6]
            break;
        case "C":
            e.style.color = color[2];
            e.style.backgroundColor = color[5]
            break;
        case "D":
            e.style.color = color[3];
            e.style.backgroundColor = color[4]
            break;
        case "E":
            e.style.color = color[4];
            e.style.backgroundColor = color[3]
            break;
        case "F":
            e.style.color = color[5];
            e.style.backgroundColor = color[2]
            break;
        case "G":
            e.style.color = color[6];
            e.style.backgroundColor = color[1]
            break;
        case "H":
            e.style.color = color[7];
            e.style.backgroundColor = color[0]
            break;
    }
})

function dontRebeat() {
let newArr = [];
for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < 5; j++){
        if (newArr[j] !== arr[Math.floor(Math.random() * arr.length)]) {
            newArr.push(arr[Math.floor(Math.random()* arr.length)]);
        } else {
            continue;
        }
    }
}
    let set = new Set(newArr);
    if (set.size < 8) {
        window.location.reload()
    }
    let NEWSET = Array.from(set)
    return NEWSET;
}

Box.forEach(function (e) {
    e.addEventListener("click", function () {
        this.style.prentevent = "none";
        this.classList.add("active")
        this.style.transform = "rotateY(180deg)";
        
        if (window.localStorage.getItem("name")) {
            window.localStorage.setItem("name2", this.textContent);

            if (window.localStorage.getItem("name") == window.localStorage.getItem("name2")) {
                this.classList.add("active");
                let ActiveBox = document.querySelectorAll(".active")
                ActiveBox.forEach(function (e) {
                e.classList.add("remove")
                })
                co++;
                Score.textContent++;
                window.localStorage.clear();
                
            } else {
                window.localStorage.clear();
                setTimeout(function () {
                Box.forEach(function (e) { 
                    e.style.transform = "rotateY(0deg)";
                    e.classList.remove("active")
                    window.localStorage.clear();
                })
            },1000)
            }
        } else {
        
            window.localStorage.setItem("name", this.textContent)
            this.style.transform = "rotateY(180deg)"
        }
    })
    e.addEventListener("dblclick", function () {
        window.localStorage.clear()
    })
})




let SelTi = document.getElementById("ti");
let start = document.querySelector("button.start");
let after = document.querySelector(".after");
let before = document.querySelector(".before");

SelTi.addEventListener("change", function () {
    Time.innerHTML = SelTi.value;
    start.style.display = "block";
   
})


start.onclick = function () {
    SelTi.style.visibility = "hidden";
    restart.style.visibility = "hidden";
     Box.forEach(function(e){
        e.style.display = "block"
    })
    let tm1 = setInterval(function () {
        Time.textContent -= 1
        if (Time.textContent <= 1) {
            clearInterval(tm1)
            Time.textContent = 0;
            Box.forEach(function (e) {
                e.style.display = "none";
            })
            after.style.display = "block";
            restart.style.visibility = "visible";
        }
    if (co >= 8) {
        clearInterval(tm1);
        Score.textContent = Number(Time.textContent) + co;
        before.innerHTML += Score.textContent;
        if (window.sessionStorage.getItem("Score") < Score.textContent) {
            window.sessionStorage.setItem("Score", Score.textContent)
            best_score.textContent = window.sessionStorage.getItem("Score")
        } 
        before.style.display = "block";
        restart.style.visibility = "visible";
    } 

    },1000)
    this.style.visibility = "hidden";
}

restart.onclick = function () {
    window.location.reload()
}









