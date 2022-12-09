import buildArray from "./array";
import { app } from "../../index";

function title() {
  let editTitle = false;
  const titleContainer = document.createElement('div');
  titleContainer.classList.add('titleContainer');
  titleContainer.addEventListener('mouseover', () => {
      titleEdit.style.color= '#131316';
  })
  titleContainer.addEventListener('mouseout', () => {
    if ( !editTitle ) {
      titleEdit.style.color= '#fff';
    }
})
  const titleSave = document.createElement('i');
  titleSave.className = 'fa-solid fa-floppy-disk fa-2x iconTextSave';
  titleSave.addEventListener('click', () => {
    titleEdit.classList.replace('fa-xmark', 'fa-pen-to-square');
    titleEdit.style.marginBot = '0';
    titleInput.style.width = '0';
    titleText.style.display = 'flex';
    titleSave.style.display = 'none';
    titleEdit.style.color = '#fff';
    editTitle = false;
    buildArray.forEach(item => {
      item.title = titleInput.value;
    });
    titleText.textContent= buildArray[0].title;
    localStorage.setItem("buildArrayStorage", JSON.stringify(buildArray));
    editTF = false;
  });
  const inputTextContainer = document.createElement('div');
  inputTextContainer.classList.add('inputTextContainer');
  const inputContainer = document.createElement('div');
  inputContainer.classList.add('inputContainer');
  const titleText = document.createElement('div');
  titleText.classList.add('titleText');
  titleText.textContent= buildArray[0].title;
  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.classList.add('titleInput');
  const titleEdit = document.createElement('i');
  titleEdit.className= 'fa-solid fa-pen-to-square fa-2x iconTextEdit';
  inputContainer.append( titleInput )
  inputTextContainer.append( titleText, inputContainer );
  titleContainer.append( titleSave, inputTextContainer, titleEdit );
  let editTF = false;
  titleEdit.addEventListener('click', () => {
    if ( editTF ) {
      titleEdit.classList.replace('fa-xmark', 'fa-pen-to-square');
      titleEdit.style.marginBot = '0';
      titleInput.style.width = '0';
      titleText.style.display = 'flex';
      titleSave.style.display = 'none';
      editTitle = false;
      editTF = false;
    } else {
      titleEdit.classList.replace('fa-pen-to-square', 'fa-xmark');
      titleInput.value = buildArray[0].title;
      titleEdit.style.marginBot = '0';
      titleInput.style.width = '100%';
      titleText.style.display = 'none';
      titleSave.style.display = 'flex';
      titleEdit.style.color = '#131316';
      editTitle = true;
      editTF = true;
    }
  })
  app.append( titleContainer );
}

export default title;