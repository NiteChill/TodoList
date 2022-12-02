import add from './assets/function/addFunction';
import buildArray from './assets/function/array';
import build from './assets/function/build';
import './default.scss';
const app = document.getElementById('app');
const todo = document.createElement('div');
todo.classList.add('todo');
let addIsEnabled = true;
function switchEnable(boolean) {
	addIsEnabled = boolean;
}
app.append(todo);
buildArray.forEach((item) => {
	build(item);
});
add();
export { todo, app, switchEnable, addIsEnabled };
