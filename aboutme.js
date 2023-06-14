const addMoreButton = document.getElementById('addMoreButton');

function addParagraph() {
  const parent = document.createElement('p');
  const text = document.createTextNode('More Text');
  parent.appendChild(text);

  addMoreButton.parentNode.appendChild(parent);
}

addMoreButton.onclick = addParagraph;
