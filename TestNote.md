---
relates:
  - entity: object
    name: The bucket of endless milk
    relate: Wants
---
```dataviewjs
const tableTest = document.createElement("div");
tableTest.className = "table-test";
const left = document.createElement("div");
left.innerHTML = "left"
const right = document.createElement("div");
right.innerHTML = "right"
tableTest.appendChild(left);
tableTest.appendChild(right);
dv.container.appendChild(tableTest);
```

```dataviewjs
// const mb = app.plugins.plugins["obsidian-meta-bind-plugin"].api;
dv.view("Extras/Scripts/RelateToEntity", { 
	container: this.container,
	component: this.component,
	file: this.currentFilePath
	});
```