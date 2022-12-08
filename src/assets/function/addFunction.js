import buildArray from './array';
import { todo, app, switchEnable, addIsEnabled } from '../../index';
import build, { idNbr, resetSecureIdNumber } from './build';
import colorArray from './colorArray';

function add() {
	const addContainer = document.createElement('div');
	addContainer.classList.add('addContainer');
	const add = document.createElement('i');
	add.className = 'fa-regular fa-square-plus fa-2x icon margin-0';
	addContainer.append(add);
	app.append(addContainer);
	addContainer.addEventListener('click', () => {
		let random = Math.floor(Math.random() * 6);
		if (addIsEnabled) {
			todo.innerHTML = '';
			buildArray.push({
				id: idNbr,
				done: false,
				edit: true,
				message: '',
				color: colorArray[random].color,
			});
			resetSecureIdNumber();
			buildArray.forEach((item) => {
				build(item, true);
			});
			switchEnable(false);
		} else {
			addContainer.classList.add('wiggle');
			window.setTimeout(() => {
				addContainer.classList.remove('wiggle');
			}, 820);
		}
		localStorage.setItem("buildArrayStorage", JSON.stringify(buildArray));
	});
}

export default add;
