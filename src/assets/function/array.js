const storage = localStorage.getItem("buildArrayStorage");
const storageParse = JSON.parse(storage);

let buildArray;

if ( storageParse ) {
	buildArray = storageParse;
} else {
	buildArray = [
		{
		  id: 0,
		  done: false,
		  edit: false,
		  message: 'Your Todo Name',
		  color: '#131316',
		},
	  ];
};

export default buildArray;
