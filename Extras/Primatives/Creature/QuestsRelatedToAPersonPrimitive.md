```dataviewjs
const self = dv.current();

const mb = app.plugins.plugins["obsidian-meta-bind-plugin"].api;

const relateBindTarget = mb.createBindTarget('frontmatter', this.currentFilePath, ['creature', 'questrelates'])

const quests = dv.pages("-\"Extras\" AND #questline");
const questOptions = quests
    .map(questPage=>`option(${questPage.file.name})`);


const tableOptions = {
	bindTarget: relateBindTarget,
	// tableHead: ['Quest', 'Link', 'Step', 'Description'],
	tableHead: ['Quest', 'Link', 'Description'],
	columns: [
		`INPUT[inlineSelect(${questOptions.join(",")}):scope^quest]`,
		'VIEW[{scope^quest}][link]',
		// `INPUT[inlineListSuggester(${questSteps.join(",")}):scope^step]`,
		`INPUT[textArea:scope^description]`
	],
};

const mountable = mb.createTableMountable(this.currentFilePath, tableOptions);

mb.wrapInMDRC(mountable, this.container, this.component);
```