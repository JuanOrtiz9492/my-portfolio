const cards = [
	{
		id: 1,
		projectName: 'Fire Marketing',
		sumary: 'e comerce related to alcohol industry',
		description: `This e-commerce was built with the goal to be responsive fast loading times, this last part was achieved by implementing the correct size for images and compressing these files. Also, I avoided the use of a UI-library to keep the css as small as possible.

			The state is managed by redux, the styles were applyed with the help of styledcomponents.
			
			In the service side, I implemented a NodeJS server along with express and Knex as an ORM to communicate with the database,
			
			The project that you can visit right now is running on a Linux sever inside of a docker container`,
		img: './fire-marketing.jpg',
		isVisitable: true,
		url: 'http://juanortizdev.com/ecomerce',
	},
	{
		id: 2,
		projectName: 'Disney',
		sumary: "support on Disney's cart page",
		description: `Durin this project i provided support to the disney's cart page,
		 this was written in php and jquery i did also provide support for the web version`,
		img: './disney.jpg',
		isVisitable: true,
		url: 'https://disneyworld.disney.go.com/es-co/cart/',
	},
	{
		id: 3,
		projectName: 'Zoom Nitro',
		sumary: 'IOT and car detection',
		img: './zoom-nitro.jpg',
		description: `This projects integrates IOT and IA, in this project i worked both
		 in the Frontend and the Backend, but i did not work in the IA engine
		 hoever i did implement very usefull libraies and build critical componets`,
		isVisitable: true,
		url: 'https://www.hme.com/qsr/zoom-nitro/',
	},
];
const dummy = 'dummy';

export { cards, dummy };
