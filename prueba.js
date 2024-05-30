let filters = {};
let products = {};
let queryParam;

async function loadFilters() {
	const response = await fetch("filtros.json");
	filters = await response.json();
}
async function loadProducts() {
	const response = await fetch("productos.json");
	products = await response.json();
}
function getFilters(category_name) {
	let filtered = filters.find((filter) => filter.nombre === category_name);
	return filtered.filtros;
}

function setFilters(value) {
	let filterName = value.nombre;
	let valueToFilter = value.valor;
	let values = filterByValue(valueToFilter);

	let filterMenu = document.createElement("div");
	filterMenu.classList.add("filter-menu");
	let filterTitle = document.createElement("h3");
	filterTitle.innerText = filterName;
	filterMenu.appendChild(filterTitle);

	for (let value of values) {
		let filterValue = document.createElement("label");

		let checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.value = value;
		checkbox.name = filterName;

		filterValue.innerText = value;

		filterValue.appendChild(checkbox);
		filterMenu.appendChild(filterValue);

		checkbox.dataset.valueToFilter = valueToFilter;
		checkbox.addEventListener("change", function () {
			valueToFilter = this.dataset.valueToFilter;
			applyFilter(filters);
		});
	}
	document.getElementById("filtros").appendChild(filterMenu);
}

function filterByValue(valueToFilter) {
	let filtered = [];
	products.filter((product) => {
		let categories = valueToFilter.split(".");
		let categoryValue = product;
		for (let category of categories) {
			categoryValue = categoryValue[category];
		}
		if (!filtered.includes(categoryValue)) {
			filtered.push(categoryValue);
		}
	});
	return filtered;
}

function applyFilter(filters) {
	let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
	let filteredProducts = products;
    console.log(checkboxes)
	for (let checkbox of checkboxes) {
        console.log(checkbox)
		let category = checkbox.name;
		let value = checkbox.value;
		let valueToFilter = checkbox.dataset.valueToFilter.split(".");
        console.log("previous", filteredProducts)
		filteredProducts = filteredProducts.filter((product) => {
			let toFilter = product;

			for (let value of valueToFilter) {
				toFilter = toFilter[value];
			}
		});
        console.log("post", filteredProducts)
		filteredProducts = filteredProducts.filter((product) => toFilter === value);

		// filteredProducts = filteredProducts.filter((product) => {
		//     let categories = value.split(".");
		//     let categoryValue = product;
		//     for (let category of categories) {
		//         categoryValue = categoryValue[category];
		//     }
		//     return categoryValue === value;
		// });
	}
	console.log(filteredProducts);
}

function filterPerQuery() {
	let queryParam = new URLSearchParams(window.location.search);
	let category = queryParam.get("categoria");
	let filtered = getFilters(category);
	setFilters(category);
}
document.addEventListener("DOMContentLoaded", async function () {
	await loadFilters();
	await loadProducts();

	xxx = getFilters("computador");

	for (let filter of xxx) {
		setFilters(filter);
	}
});
