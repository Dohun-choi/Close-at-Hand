module.exports = {
	expo: {
		name: "Close At Hand",
		slug: "Close At Hand",
		version: "0.0.1",
		orientation: "portrait",
		icon: "./assets/icon.png",
		userInterfaceStyle: "light",
		splash: {
			image: "./assets/splash.svg",
			resizeMode: "contain",
			backgroundColor: "#ffffff",
		},
		assetBundlePatterns: ["**/*"],
		ios: {
			supportsTablet: true,
		},
		android: {
			package: "com.closeAtHand",
			adaptiveIcon: {
				foregroundImage: "./assets/adaptive-icon.png",
				backgroundColor: "#ffffff",
			},
		},
		web: {
			favicon: "./assets/favicon.png",
		},
		extra: {
			storybookEnabled: "process.env.STORYBOOK_ENABLED",
		},
	},
};
