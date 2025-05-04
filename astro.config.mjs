// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'La Akademia',
			logo: {
				light: './src/assets/dark-logo.svg',
				dark: './src/assets/light-logo.svg',
			  },
			customCss: [
				'./src/colores.css',
			],
			social: [{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/la-akademia' },
						{ icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/laakademia.org' },
						{ icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/laakademiaorg' },
						{ icon: 'laptop', label: 'Página Web', href: 'https://laakademia.org' }
			],	
			sidebar: [
				{
					label: 'Páginas',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '¿Cómo funcionamos?', slug: 'pages/pag1' },
						{ label: '¿Cómo registrar miembros?', slug: 'pages/pag2' },
					],
				},
			],
		}),
	],
});
