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

const mb = app.plugins.plugins["obsidian-meta-bind-plugin"].api;

const locationOptions = dv.pages("-\"Extras\" and #location").map(location=>`option(${location.file.name})`);
// const locationPathOptions = dv.pages("#location").map(location=>`option(${location.file.path})`);
const locationAffiliations = ["Home","Birthplace","Childhood Home","Ancestral Homeland","Sanctuary","Grave of a Loved One","Base of Operations","Workplace","Place of Training","Residence of a Patron","Quest Origin","Enemy Territory","Place of Exile","Fateful Meeting Place","Sealed Location","Religious Site","Cultural Hub","Symbolic Landmark","Hideout","Travel Stop","Mystical Connection","Forgotten Memories","Forbidden Zone",];
const locationAffiliationOptions = locationAffiliations.map(locationAffiliation=>`option(${locationAffiliation})`);

const tableOptions = {
	bindTarget: mb.createBindTarget('frontmatter', this.currentFilePath, ['locations']),
	tableHead: ['Location', 'Affiliation', 'Link'],
	columns: [
		`INPUT[inlineSelect(${locationOptions.join(",")}):scope^name]`,
		`INPUT[inlineListSuggester(${locationAffiliationOptions.join(",")}):scope^affiliation]`,
		'VIEW[{scope^name}][link]'
	],
};

const mountable = mb.createTableMountable(this.currentFilePath, tableOptions);

mb.wrapInMDRC(mountable, right, this.component);
```

```dataviewjs
dv.view("Extras/Scripts/test", { poes: '25', arg2: 'b' });
```