const {container, component, file, from, to} = input;

const mb = app.plugins.plugins["obsidian-meta-bind-plugin"].api;

const self = dv.current();

// Object related to
const entities = dv.pages(`-\"Extras\" and #${to}`);

const nameToPathDictionary = {}
entities
	.filter(e=>e.file.name != self.file.name)
	.forEach(entity => {
		nameToPathDictionary[entity?.file?.name] = entity?.file?.path;
	}
);

const thisRelates = self.relates?.[to];

// Write to other file metadata
thisRelates?.forEach(async relate => {
	if (relate.name) {
		const relateBindTarget = mb.createBindTarget('frontmatter', nameToPathDictionary[relate.name], ["relates", from]);
	
		if (!mb.getMetadata(relateBindTarget)) {
			mb.setMetadata(relateBindTarget, [{
				name: self.file.name,
				relate: []
			}])
		}else if (
			Array.isArray(mb.getMetadata(relateBindTarget)) &&
			(
				mb.getMetadata(relateBindTarget).length === 0 ||
				!mb.getMetadata(relateBindTarget).some(item => item.name === self.file.name)
			)
		) {
			mb.setMetadata(relateBindTarget, [
				...mb.getMetadata(relateBindTarget),
				{
					name: self.file.name,
					relate: []
				}
			]);
		}
	}
});

// Delete other relates
const otherQuery = await dv.query(`LIST FROM -\"Extras\" and #${to}`);
const other = otherQuery?.value?.values;
other
	?.filter(otherObject=>{
		const otherObjectBindTarget = mb.createBindTarget('frontmatter', otherObject.path, ["relates", from]);
		const otherObjectRelates = mb.getMetadata(otherObjectBindTarget);

		const otherHasMe = otherObjectRelates?.some(otherObjectRelate=>otherObjectRelate.name === self.file.name) || false;

		const otherName = otherObject.path.match(/([^/]+)(?=\.md$)/)[0];
		const IHaveOther = thisRelates?.some(thisRelate=>thisRelate.name === otherName);

		// console.info(otherObject.path);
		// console.info("otherHasMe", otherHasMe, "IHaveOther", IHaveOther);

		return otherHasMe && !IHaveOther;
	})
	?.forEach(otherObject=>{
		console.error("Must delete from", otherObject.path);
		const otherObjectBindTarget = mb.createBindTarget('frontmatter', otherObject.path, ["relates", from]);
		const otherObjectRelates = mb.getMetadata(otherObjectBindTarget);
		mb.setMetadata(otherObjectBindTarget, otherObjectRelates.filter(r=>r.name !== self.file.name))

		// const otherName = otherObject.path.match(/([^/]+)(?=\.md$)/)[0];
		// console.info("Evaluationg", otherName)

		// if (thisRelates.some(r=>r.name == otherName)) {
		// 	console.warn(thisRelates, otherName)
		// }
	})


// Create table for metadata
const entityOptions = entities
	.filter(e=>e.file.name != self.file.name)
	.map(e=>`option(${e.file.name})`).join(",");

const tableOptions = {
	bindTarget: mb.createBindTarget('frontmatter', file, ["relates", to]),
	tableHead: ["Type", "Link", "Relate"],
	columns: [
		`INPUT[inlineSelect(${entityOptions}):scope^name]`,
		`VIEW[{scope^name}][link]`,
		`INPUT[inlineListSuggester(allowOther(true)):scope^relate]`,
	],
};

const mountable = mb.createTableMountable(file, tableOptions);
mb.wrapInMDRC(mountable, container, component);