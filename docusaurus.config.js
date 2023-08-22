// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import("@docusaurus/types").Config} */
const config = {
	title: "Telehooper",
	tagline: "Telegram-бот для пересылки сообщений и постов с разных сервисов в Telegram.",
	favicon: "img/favicon.ico",

	url: "https://telehooper.com",
	baseUrl: "/",

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	i18n: {
		defaultLocale: "ru",
		locales: ["ru"]
	},

	presets: [
		[
			"classic",
			/** @type {import("@docusaurus/preset-classic").Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					editUrl: "https://github.com/Zensonaton/Telehooper-docs/tree/main/"
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css")
				}
			})
		]
	],

	themeConfig:
		/** @type {import("@docusaurus/preset-classic").ThemeConfig} */
		({
			navbar: {
				title: "Telehooper",
				logo: {
					alt: "Лого Telehooper",
					src: "img/favicon.ico"
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "tutorialSidebar",
						position: "left",
						label: "Документация"
					},
					{
						href: "https://github.com/Zensonaton/Telehooper-docs",
						label: "GitHub",
						position: "right"
					}
				]
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Сообщество",
						items: [
							{
								label: "Telegram-бот",
								href: "https://t.me/telehooper_bot"
							},
							{
								label: "Канал",
								href: "https://t.me/telehooper_news"
							},
							{
								label: "Github",
								href: "https://github.com/Zensonaton/Telehooper"
							}
						]
					}
				],
				copyright: `Copyright © ${new Date().getFullYear()} Telehooper`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
		})
}

module.exports = config
