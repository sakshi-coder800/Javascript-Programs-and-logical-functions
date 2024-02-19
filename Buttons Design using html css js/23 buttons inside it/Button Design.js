//  ===============================================button 1 ================================================== 
// no js 
//  ===============================================button 2 ================================================== 
// no js 
//  ===============================================button 3 ================================================== 
//  yes js 
var btn = document.querySelector(".button3");
var spinIcon = document.querySelector(".spinner");
var btnText = document.querySelector(".btn-text24");

btn.addEventListener("click", () => {
    btn.style.cursor = "wait";
    btn.classList.add("checked");
    spinIcon.classList.add("spin");
    btnText.textContent = "Loading";

    setTimeout(() => {
        btn.style.pointerEvents = "none";
        spinIcon.classList.replace("spinner", "check");
        spinIcon.classList.replace("fa-circle-notch", "fa-check");
        btnText.textContent = "Done";

    }, 4500) //1s = 1000ms
});


//  ===============================================button 4 ================================================== 
// no js 

//  ===============================================button 5 ================================================== 
var minus = document.querySelector(".minus")
var num = document.querySelector(".num")
var plus = document.querySelector(".plus")
let a = 1;
minus.addEventListener("click", function () {
    if (a > 1) {
        a--;
        a = (a < 10) ? '0' + a : a
        num.innerHTML = a
    }
})
plus.addEventListener("click", function () {
    a++;
    a = (a < 10) ? '0' + a : a;
    num.innerHTML = a
})


//  ===============================================button 6 ================================================== 
//  ===============================================button 6 ================================================== 
//  ===============================================button 8 ================================================== 
const toggleBtn = document.querySelector(".button8");
toggleBtn.addEventListener("click", () => { toggleBtn.classList.toggle("active23") })


//  ===============================================button 9 ================================================== 
var button = document.querySelector(".button9");
button.addEventListener("click", function () {
    // alert("fdf")
    button.classList.add('active');
    button.querySelector("i").style.display = "none"
    button.querySelector("span").innerHTML = ""
    setTimeout(() => {
        button.classList.remove('active')
        button.querySelector("i").style.display = "block"

        button.querySelector("i").classList.replace("bx-cloud-download", "bx-check-circle")
        button.querySelector("span").innerHTML = "Complete"
    }, 6000);
})
//  ===============================================button 10 ================================================== 
var btn12 = document.querySelector('.button10')
var text12 = document.querySelector('.text12')
btn12.addEventListener("click", () => {
    btn12.classList.add('progress')
    text12.innerHTML = "Uploading...."
})
setTimeout(() => {
    btn12.classList.remove("progress");
    text12.innerHTML = "Uploaded"
}, 6000);
//  ===============================================button 11 ================================================== 
// Button 1  start 
var btn1 = document.querySelector(".heart");
btn1.addEventListener('click', function () {
    if (!btn1.classList.contains("forward")) {
        btn1.classList.add("forward");
        btn1.classList.remove("reverse")
    } else {
        btn1.classList.add("reverse")
        btn1.classList.remove("forward");
    }
    // alert("click")
})

//  ===============================================button 12 ================================================== 
//  ===============================================button 13 ================================================== 
//  ===============================================button 20 ================================================== 
const button20 = document.querySelector(".button20");
button20.addEventListener("click", (e) => {
    e.preventDefault();
    button20.classList.add("animate");
    setTimeout(() => {
        button20.classList.remove("animate")
    }, 600);


})
//  ===============================================button 22 ================================================== 
let menuBtn = document.querySelectorAll(".icon21");
for (var i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click", (e) => {
        console.log(e.target);
        e.target.classList.toggle("active");
    });
}