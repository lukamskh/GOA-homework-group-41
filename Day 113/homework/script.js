document.getElementById("myDiv").classList.add("highlight");
document.getElementById("myDiv").classList.remove("highlight");
document.getElementById("toggleButton").addEventListener("click", function () {
  document.getElementById("targetDiv").classList.toggle("active");
});

const hasClass = document
  .getElementById("checkParagraph")
  .classList.contains("important");
console.log(hasClass);
document.getElementById("replaceDiv").classList.replace("red", "blue");

const classes = document.getElementById("itemDiv").classList;
console.log(classes.item(1));

const newLi = document.createElement("li");
newLi.textContent = "New Item";
document.getElementById("myList").appendChild(newLi);
document.getElementById("myList").firstChild.remove();
document.getElementById("myList").children[0].textContent = "Updated Item 2";
document.getElementById("myParagraph").textContent = "New text content!";

const styledDiv = document.getElementById("styledDiv");
styledDiv.style.backgroundColor = "lightblue";
styledDiv.style.color = "darkblue";

const newListItem = document.createElement("li");
newListItem.textContent = "New list item";
document.getElementById("appendableList").appendChild(newListItem);
document.getElementById("removableList").children[1].remove();

const imgElement = document.getElementById("myImage");
imgElement.src = "https://via.placeholder.com/300";
imgElement.alt = "Updated image";