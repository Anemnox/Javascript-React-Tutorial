
function main() {
  console.log("hello world!");
  let para = document.getElementById("paragraph");

  //para.innerHTML = "hello";
  para.style.fontSize = "30px";

  let button = document.getElementById("click-me");

  button.addEventListener('click', popUp);
}

function generateUnorderedList(textList) {  // list of text
  let list = document.createElement("ul");

  textList.forEach((item, i) => {
    list.appendChild(generateListItem(item));
  });

  return list;
}

function generateListItem(text) {
  let element = document.createElement("li");

  element.classList.add("test-li");
  element.innerHTML = text;

  return element;
}

function popUp() {
  alert("Hello World!");

  let list = generateUnorderedList(["hello", "scope"]);

  let node = document.getElementById("list");
  node.appendChild(list);
}


window.addEventListener('load', () => {
  main();
});
