import buildArray from "./array";
import { app } from "../../index";

function title() {
  const titleContainer = document.createElement('div');
  titleContainer.classList.add('titleContainer');
  const titleSave = document.createElement('i');
  titleSave.className = 'fa-regular fa-floppy-disk fa-2x iconTextSave';
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
  titleEdit.className= 'fa-regular fa-pen-to-square fa-2x iconTextEdit';
  inputContainer.append( titleInput )
  inputTextContainer.append( titleText, inputContainer );
  titleContainer.append( titleSave, inputTextContainer, titleEdit );
  let editTF = false;
  titleEdit.addEventListener('click', () => {
    if ( editTF ) {
      titleEdit.classList.replace('fa-xmark', 'fa-pen-to-square');
      titleEdit.classList.replace('fa-solid', 'fa-regular');
      titleEdit.style.marginBot = '0';
      titleInput.style.width = '0';
      titleText.style.display = 'flex';
      editTF = false;
    } else {
      titleEdit.classList.replace('fa-pen-to-square', 'fa-xmark');
      titleEdit.classList.replace('fa-regular', 'fa-solid');
      titleEdit.style.marginBot = '0';
      titleInput.style.width = '100%';
      titleText.style.display = 'none';
      editTF = true;
    }
    // titleInput.style.width = titleText.getBoundingClientRect().width + "px";
  })
  app.append( titleContainer );
}

export default title;