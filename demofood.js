let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("hanoi-img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); 
}
function search() {
  console.log("2")
}
// đổi màu
function bgChanger(){
  if (this.scrollY > this.innerHeight / 2){
    document.body.classList.add("bg-active-one");
  } else {
    document.body.classList.remove("bg-active-one");
  }
  if (this.scrollY > this.innerHeight * 1.25){
    document.body.classList.add("bg-active-two");
  } else {
    document.body.classList.remove("bg-active-two");
  }
}
window.addEventListener("scroll", bgChanger);
let arrFb =[]
let form = document.querySelector('#fb')

form.onsubmit = (e)=>{
  e.preventDefault()
   let data = {
     name: form.Name.value.trim(),
     email: form.Email.value.trim().toLowerCase(),
     mess: form.Message.value.trim()
   }
   arrFb.push(data)
   localStorage.setItem('feedback', JSON.stringify(arrFb))
}