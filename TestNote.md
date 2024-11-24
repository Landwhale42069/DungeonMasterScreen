---
tags: character
relates:
  object:
    - name: Wand of infinite weiner
    - name: The bucket of endless milk
  character: []
---
<!-- ```dataviewjs
const tableTest = document.createElement("div");
tableTest.className = "table-test";
const left = document.createElement("div");
left.innerHTML = "left"
const right = document.createElement("div");
right.innerHTML = "right"
tableTest.appendChild(left);
tableTest.appendChild(right);
dv.container.appendChild(tableTest);
``` -->

```dataviewjs
dv.view("Extras/Scripts/RelateToEntity", { 
	container: this.container,
	component: this.component,
	file: this.currentFilePath,
	from: "character",
	to: "object"
	});
```

```dataviewjs
dv.view("Extras/Scripts/RelateToEntity", { 
	container: this.container,
	component: this.component,
	file: this.currentFilePath,
	from: "character",
	to: "character"
	});
```