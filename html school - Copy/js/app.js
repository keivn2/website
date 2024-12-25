let btn = document.getElementsByClassName("carousel-control-next")[0];

console.log(btn)
let handle = setInterval(() => {
    btn.click()
},5000)
