default: Use for SSG (Static Site Generator) which able to export as static HTML. It’s more flexible hosting, but it has customized folder structure.

pages/
	|_[locales]/
		|_index.js
		|_other_pages.js

simple-routing: Use for SSR (Server Side Rendering) More simple folder structure, but more advanced config for deployment and hosting. It needs cloud hosting with node.js and apache or nginx for production.

pages/
	|_index.js
	|_other_pages.js