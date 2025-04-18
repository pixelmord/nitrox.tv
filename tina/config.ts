import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
	process.env.GITHUB_BRANCH ||
	process.env.VERCEL_GIT_COMMIT_REF ||
	process.env.HEAD ||
	"main";

export default defineConfig({
	branch,

	// Get this from tina.io
	clientId: process.env.PUBLIC_TINA_CLIENT_ID,
	// Get this from tina.io
	token: process.env.TINA_TOKEN,

	build: {
		outputFolder: "admin",
		publicFolder: "public",
	},
	media: {
		tina: {
			mediaRoot: "",
			publicFolder: "public",
		},
	},
	// See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
	schema: {
		collections: [
			{
				name: "event",
				label: "Events",
				path: "src/content/events",
				fields: [
					{
						type: "string",
						name: "title",
						label: "Titel",
						isTitle: true,
						required: true,
					},
					{
						type: "datetime",
						name: "date",
						label: "Datum",
						required: true,
					},
					{
						type: "string",
						name: "city",
						label: "Stadt",
						required: true,
					},
					{
						type: "string",
						name: "location",
						label: "Location",
						required: true,
					},
					{
						type: "image",
						name: "cover",
						label: "Cover",
						required: true,
					},
					{
						type: "string",
						name: "tags",
						label: "Tags",
						list: true,
						required: true,
					},
					{
						type: "object",
						name: "videos",
						label: "Videos",
						list: true,
						fields: [
							{
								type: "string",
								name: "name",
								label: "Name",
								required: true,
							},
							{
								type: "string",
								name: "src",
								label: "Source",
								required: false,
							},
							{
								type: "string",
								name: "thumbnail",
								label: "Thumbnail",
								required: true,
							},
							{
								type: "rich-text",
								name: "videoDescription",
								label: "Video Description",
							},
						],
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
					},
					{
						type: "boolean",
						name: "published",
						label: "Published",
					},
				],
			},
		],
	},
});
