


function main() {
  console.log("hello world!");
  let para = document.getElementById("paragraph");

  //para.innerHTML = "hello";
  para.style.fontSize = "30px";

  let button = document.getElementById("click-me");

  button.addEventListener('click', popUp)
}


function popUp() {
  alert("Hello World!");
}









window.addEventListener('load', () => {
  main();
});
