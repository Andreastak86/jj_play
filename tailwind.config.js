module.exports = {
	content: ['./node_modules/flowbite-react/**/*.js', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}', './node_modules/flowbite/**/*.{js,ts,jsx,tsx}'],
	plugins: [require('flowbite/plugin')],
	theme: {
		extend: {
			colors: {
				'jj-color-green': '#34543D',
				'jj-color-menu': '#122E31',
				'jj-gradient-green': '#629967',
				'jj-gradient-dark': '#122e31',
				'jj-footer-links-grey': '#A8A8A8',
				'jj-footer-kv-grey': '#858585',
			},

			screens: {
				xxxs: '320px',
				xxs: '375px',
				xs: '425px',
				xxl: '1440px',
			},
			backgroundImage: {
				'index-mobile': "url('../images/index/bgMobile.svg')",
				'index-desktop': "url('../images/index/desktop-section-1-bg.svg')",
			},
		},
	},
}
