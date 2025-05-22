const components = {
	header: {
		file: "components/header/header.html",
		query: "header",
	},
	about: {
		file: "components/about/about.html",
		query: "#about",
	},
	portfolio: {
		file: "components/portfolio/portfolio.html",
		query: "main",
	},
	resume: {
		file: "components/resume/resume.html",
		query: "main",
	},
	fun_stuff: {
		file: "components/fun_stuff/fun_stuff.html",
		query: "main",
	},
}

const routes = {
	"": [components.header, components.about, components.portfolio],
	"#/portfolio": [components.header, components.about, components.portfolio],
	"#/resume": [components.header, components.about, components.resume],
	"#/fun_stuff": [components.header, components.about, components.fun_stuff],
}

function fetchHTML(component) {
	console.log("fetching", component.file);

	fetch(component.file)
		.then((response) => {
			return response.text();
		})
		.then((data) => {
			document.querySelector(component.query).outerHTML = data;
		});
}

function navigateTo(path) {
	console.log("navigating to", path);
	
	routes[path].forEach(fetchHTML);
}

window.addEventListener("hashchange", (e) => {
	console.log("hashchange", window.location.hash);

	e.preventDefault();
	navigateTo(window.location.hash);
});

window.addEventListener("load", () => {
	console.log("load", window.location.hash);

	navigateTo(window.location.hash);
});