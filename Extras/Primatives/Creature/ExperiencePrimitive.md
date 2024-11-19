```meta-bind-js-view
{creature.experience.TotalLevel} as level
---

const xpToLevel = {
    1: 0,
    2: 300,
    3: 900,
    4: 2700,
    5: 6500,
    6: 14000,
    7: 23000,
    8: 34000,
    9: 48000,
    10: 64000,
    11: 85000,
    12: 100000,
    13: 120000,
    14: 140000,
    15: 165000,
    16: 195000,
    17: 225000,
    18: 265000,
    19: 305000,
    20: 355000,
}
const max = xpToLevel[(context.bound.level ?? 1)+1];

const str = `\`\`\`meta-bind
INPUT[progressBar(maxValue(${max > 0 ? max : 300})):creature.experience.current]
\`\`\``;

return engine.markdown.create(str);
```

<!-- ```dataviewjs
const mb = app.plugins.plugins["obsidian-meta-bind-plugin"].api;

const locationOptions = dv.pages("#location").map(location=>`option(${location.file.name})`);
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

mb.wrapInMDRC(mountable, this.container, this.component);
``` -->

| Class     | Level                                                 |
| ---       | ---                                                   |
| Barbarian | `INPUT[number(class(number-s)):creature.experience.BarbarianLevel]`    |
| Bard      | `INPUT[number(class(number-s)):creature.experience.BardLevel]`         |
| Cleric    | `INPUT[number(class(number-s)):creature.experience.ClericLevel]`       |
| Druid     | `INPUT[number(class(number-s)):creature.experience.DruidLevel]`        |
| Figher    | `INPUT[number(class(number-s)):creature.experience.FigherLevel]`       |
| Monk      | `INPUT[number(class(number-s)):creature.experience.MonkLevel]`         |
| Paladin   | `INPUT[number(class(number-s)):creature.experience.PaladinLevel]`      |
| Ranger    | `INPUT[number(class(number-s)):creature.experience.RangerLevel]`       |
| Rogue     | `INPUT[number(class(number-s)):creature.experience.RogueLevel]`        |
| Sorcerer  | `INPUT[number(class(number-s)):creature.experience.SorcererLevel]`     |
| Warlock   | `INPUT[number(class(number-s)):creature.experience.WarlockLevel]`      |
| Wizard    | `INPUT[number(class(number-s)):creature.experience.WizardLevel]`       |
| Artificer | `INPUT[number(class(number-s)):creature.experience.ArtificerLevel]`    |
| Total     | `VIEW[{creature.experience.BarbarianLevel} + {creature.experience.BardLevel} + {creature.experience.ClericLevel} + {creature.experience.DruidLevel} + {creature.experience.FigherLevel} + {creature.experience.MonkLevel} + {creature.experience.PaladinLevel} + {creature.experience.RangerLevel} + {creature.experience.RogueLevel} + {creature.experience.SorcererLevel} + {creature.experience.WarlockLevel} + {creature.experience.WizardLevel} + {creature.experience.ArtificerLevel}][:creature.experience.TotalLevel]`    |