import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Spaz Docs",
  description: "Documentation for the Spaz programming language",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
			{
        text: 'Inspiration', link: '/inspiration'
			},
			{
        text: 'Installation', link: '/installation'
			},
      {
        text: 'Philosphy', link: '/philosophy'
      },
			{
				text: 'Mindset Shift',
				items: [
					{ text: "The Stack", link: '/mindset_shift/thestack' }
				]
			},
			{
				text: 'Code',
				items: [
					{ text: "Expressions", link: '/code/expressions' },
					{ text: "Control Flow",
						items: [
							{ text: "If Statements (WIP)", link: '/code/if_statements' },
						]
					},
				]
			}
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rfmineguy/spaz' }
    ],

		logo: '/favicon.png'
  },
	head: [['link', {rel: 'icon', href: '/favicon.ico'}]]
})
