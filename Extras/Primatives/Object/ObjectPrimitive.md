```meta-bind-embed
[[PrimaryPicturePrimitive]]
```
`INPUT[textArea:object.description]`

Quest Item `INPUT[toggle:object.questitem]`
```dataviewjs
const self = dv.current();

const mb = app.plugins.plugins["obsidian-meta-bind-plugin"].api;

const questItemBindTarget = mb.createBindTarget('frontmatter', this.currentFilePath, ['object', 'questitem']);
const relateBindTarget = mb.createBindTarget('frontmatter', this.currentFilePath, ['object', 'questrelates'])

const quests = dv.pages("-\"Extras\" AND #questline");
const questOptions = quests
    .map(questPage=>`option(${questPage.file.name})`);

// const questRelates = mb.getMetadata(relateBindTarget);

// const questSteps = dv.pages("-\"Extras\" AND #queststep");
// const questStepOptions = questSteps
//     .filter(questStepPage=>questRelates.map(r=>r.))
//     .map(questStepPage=>`option(${questStepPage.file.name})`);

if (mb.getMetadata(questItemBindTarget)) {
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
}


```