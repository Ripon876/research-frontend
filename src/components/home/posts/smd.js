export const data = [
	{
		id: Math.floor(Math.random() * 0xffffff)
			.toString(16)
			.padEnd(7, "0"),
		creator: {
			full_name: "Jhon Doe",
			username: "jhon_doe",
			image: "https://via.placeholder.com/50x50",
		},
		content:
			"Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.",
		creation_date: "2022-10-27",
		comments: [
			{
				id: Math.floor(Math.random() * 0xffffff)
					.toString(16)
					.padEnd(7, "0"),
				creator: {
					full_name: "Jhon Doe",
					username: "jhon_doe",
					image: "https://via.placeholder.com/50x50",
				},
				content:
					"Some quick example text to build on the card title and make up the bulk of the card's.",
				creation_date: "2022-10-27",
			},
			{
				id: Math.floor(Math.random() * 0xffffff)
					.toString(16)
					.padEnd(7, "0"),
				creator: {
					full_name: "Jhon Doe",
					username: "jhon_doe",
					image: "https://via.placeholder.com/50x50",
				},
				content:
					"Some quick example text to build on the card title and make up the bulk of the card's.",
				creation_date: "2022-10-27",
			},
			{
				id: Math.floor(Math.random() * 0xffffff)
					.toString(16)
					.padEnd(7, "0"),
				creator: {
					full_name: "Jhon Doe",
					username: "jhon_doe",
					image: "https://via.placeholder.com/50x50",
				},
				content:
					"Some quick example text to build on the card title and make up the bulk of the card's.",
				creation_date: "2022-10-27",
			},
		],
	},
];
