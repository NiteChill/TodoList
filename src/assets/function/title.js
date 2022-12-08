import buildArray from "./array";
import { app } from "../../index";

function title() {
  const titleContainer = document.createElement('div');
  titleContainer.classList.add('titleContainer');
  const titleSave = document.createElement('i');
  titleSave.className = 'fa-regular fa-floppy-disk fa-2x iconText';
  const titleText = document.createElement('div');
  titleText.classList.add('titleText');
  titleText.textContent= buildArray[0].title;
  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.classList.add('titleInput');
  const titleEdit = document.createElement('i');
  titleEdit.className= 'fa-regular fa-pen-to-square fa-2x margin-bot iconText';
  titleContainer.append( titleSave, titleText, titleInput, titleEdit );
  app.append( titleContainer );
}

export default title;