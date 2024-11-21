const {container, component, file} = input;

const mb = app.plugins.plugins["obsidian-meta-bind-plugin"].api;

const from = "person";
const to = "object"

const bindTarget = mb.createBindTarget('frontmatter', file, ['relates']);

const thing = document.createElement("p");
mb.subscribeToMetadata(
	bindTarget, 
	component, 
	(relates)=>{
		console.warn(relates)
	});

const config = dv.pages('"Extras/Config"');

// Object related to
const entities = dv.pages(`-\"Extras\" and #${to}`);
const entityOptions = entities.map(e=>`option(${e.file.name})`).join(",");
// How we relate to this object
const relates = config.relationships[from][to];
const relateOptions = relates.map(r=>`option(${r})`).join(",");

const toTitle = to.charAt(0).toUpperCase() + to.substring(1).toLowerCase();

// Build relationship tabl
const tableOptions = {
	bindTarget: bindTarget,
	tableHead: [toTitle, "Type", "link"],
	columns: [
		`INPUT[inlineSelect(${entityOptions}):scope^name]`,
        `VIEW[${to}][text:scope^entity]`,
		`INPUT[inlineSelect(${relateOptions}):scope^relate]`,
		`VIEW[{scope^name}][link]`,
	],
};

const mountable = mb.createTableMountable(file, tableOptions);
mb.wrapInMDRC(mountable, container, component);