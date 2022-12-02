import buildArray from "./array";
import { todo, switchEnable } from "../../index";
let idNbr = 0;
let secureIdNbr = 0;

function resetSecureIdNumber() {
  idNbr = 0;
}

function build(item, resetNbr) {
  if (resetNbr & (secureIdNbr === 0)) {
    idNbr = 0;
    secureIdNbr = 1;
  }
  idNbr += 1;
  const container = document.createElement("div");
  container.classList.add("container");

  const checkbox = document.createElement("div");
  if (item.done) {
    checkbox.className = "fa-solid fa-square fa-2x icon";
  } else {
    checkbox.className = "fa-regular fa-square fa-2x icon";
  }
  checkbox.addEventListener("click", () => {
    if (item.done === false) {
      item.done = true;
      update("checkbox", true);
    } else {
      item.done = false;
      update("checkbox", false);
    }
  });

  const text = document.createElement("div");
  text.classList.add("text");
  text.textContent = item.message;

  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input-container");

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.classList.add("input");

  const edit = document.createElement("i");
  edit.addEventListener("click", () => {
    if (item.edit === false) {
      item.edit = true;
      update("edit", true);
    } else {
      item.edit = false;
      update("edit", false);
    }
  });

  const bin = document.createElement("i");
  bin.className = "fa-regular fa-square-minus fa-2x margin-right icon";
  bin.addEventListener("click", () => {
    buildArray.splice(buildArray.indexOf(item), 1);
    update("tab");
  });

  const save = document.createElement("i");
  save.className = "fa-regular fa-floppy-disk fa-2x icon";
  save.addEventListener("click", () => {
    if (input.value !== "") {
      item.message = input.value;
      input.value = "";
      input.style.flex = "0";
      save.style.display = "none";
      text.style.display = "flex";
      edit.classList.replace("fa-xmark", "fa-pen-to-square");
      edit.classList.replace("fa-solid", "fa-regular");
      edit.classList.add("margin-bot");
      update("text");
      item.edit = false;
      switchEnable(true);
    } else {
      container.classList.add("wiggle");
      window.setTimeout(() => {
        container.classList.remove("wiggle");
      }, 820);
    }
  });

  if (item.edit) {
    input.style.flex = "1";
    edit.className = "fa-solid fa-xmark fa-2x icon";
    text.style.display = "none";
    save.style.display = "flex";
  } else {
    edit.className = "fa-regular fa-pen-to-square fa-2x margin-bot icon";
    input.style.flex = "0";
    save.style.display = "none";
  }

  inputContainer.append(input);
  container.append(checkbox, text, save, inputContainer, edit, bin);
  todo.append(container);

  function update(type, boolean) {
    switch (type) {
      case "checkbox":
        if (boolean) {
          checkbox.classList.replace("fa-regular", "fa-solid");
        } else {
          checkbox.classList.replace("fa-solid", "fa-regular");
        }
        break;
      case "edit":
        if (boolean) {
          edit.classList.replace("fa-pen-to-square", "fa-xmark");
          edit.classList.replace("fa-regular", "fa-solid");
          edit.classList.remove("margin-bot");
          input.style.flex = "1";
          text.style.display = "none";
          save.style.display = "flex";
        } else if (!boolean && item.message === "" && input.value === "") {
          buildArray.splice(buildArray.indexOf(item), 1);
          update("tab");
          switchEnable(true);
        } else {
          edit.classList.replace("fa-xmark", "fa-pen-to-square");
          edit.classList.replace("fa-solid", "fa-regular");
          edit.classList.add("margin-bot");
          input.style.flex = "0";
          text.style.display = "flex";
          save.style.display = "none";
          switchEnable(true);
        }
        break;
      case "text":
        text.textContent = item.message;
        break;
      case "tab":
        switchEnable(true);
        todo.innerHTML = "";
        secureIdNbr = 0;
        buildArray.forEach((item) => {
          build(item, true);
        });
        break;
      default:
        console.log("error");
        break;
    }
  }
}

export { idNbr, resetSecureIdNumber };
export default build;