/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-exo2)", ...defaultTheme.fontFamily.sans],
			},
			aspectRatio: {
				"5/2": "5 / 2",
				"4/3": "4 / 3",
				"4/5": "4 / 5",
				"3/5": "3 / 5",
				"3/4": "3 / 4",
				"5/6": "5 / 6",
			},
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			addCommonColors: true,
			themes: {
				light: {
					colors: {
						orange: {
							500: "#FF550D",
						},
					},
					// black: "#000000",
				},
			},
		}),
	],
};
