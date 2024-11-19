```dataviewjs
const mb = app.plugins.plugins["obsidian-meta-bind-plugin"].api;
const questIdBindTarget = mb.createBindTarget('frontmatter', this.currentFilePath, ['quest', 'id']);

const self = dv.current();
if (self.file.frontmatter.tags.indexOf("queststep") != -1) {
    const questLineOptions = dv.pages("-\"Extras\" and #questline").map(location=>`option(${location.file.name})`);
    const inputOption = {
        renderChildType: "inline",
        declaration: `INPUT[inlineSelect(${questLineOptions.join(",")}):quest.id]`
    };
    const mountable = mb.createInputFieldMountable(this.currentFilePath, inputOption);
    mb.wrapInMDRC(mountable, this.container, this.component);
    dv.execute("LIST FROM #questline WHERE this.file.frontmatter.quest.id = file.frontmatter.quest.id");
}else if (self.file.frontmatter.tags.indexOf("questline") != -1) {
    mb.setMetadata(questIdBindTarget, self.file.name)
}
```