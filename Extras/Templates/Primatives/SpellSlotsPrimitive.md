<!-- ```dataviewjs
const mb = app.plugins.plugins["obsidian-meta-bind-plugin"].api;

const spellSlotLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const spellSlotLevelOptions = spellSlotLevels.map(spellSlotLevel=>`option(${spellSlotLevel})`);

const max = mb.createBindTarget('frontmatter', this.currentFilePath, ["spells", "0", "max"]);
const val = mb.getMetadata(max);

const tableOptions = {
	bindTarget: mb.createBindTarget('frontmatter', this.currentFilePath, ['spells']),
	tableHead: ['Level', 'Max Slots', 'Slots', 'thing'],
	columns: [
		`INPUT[inlineSelect(${spellSlotLevelOptions.join(",")}):scope^level]`,
        `INPUT[number(class(number-s),defaultValue(1)):scope^max]`,
        `INPUT[slider(addLabels, maxValue(10)):scope^current]`,
		'VIEW[{scope^current}][math(hidden)]',
	],
};

const mountable = mb.createTableMountable(this.currentFilePath, tableOptions);

mb.wrapInMDRC(mountable, this.container, this.component);
``` -->

<!-- ```dataviewjs
const mb = app.plugins.plugins["obsidian-meta-bind-plugin"].api;

const spellSlotsBindTarget = mb.createBindTarget('frontmatter', this.currentFilePath, ["spells", "slots"]);
const spellSlots = mb.getMetadata(spellSlotsBindTarget);

if (!spellSlots) {
    const spellBinds = {
        "0": { level: 1, max: 1, current: 1 },
        "1": { level: 2, max: 1, current: 1 },
        "2": { level: 3, max: 1, current: 1 },
        "3": { level: 4, max: 1, current: 1 },
    }
    Object.keys(spellBinds).forEach(spellLevel=>{
        Object.keys(spellBinds[spellLevel]).forEach(key=>{
            const tempBind = mb.createBindTarget('frontmatter', this.currentFilePath, ["spells", "slots", spellLevel, key]);
            mb.setMetadata(tempBind, spellBinds[spellLevel][key])
        })
    });
    const spellSlots = mb.getMetadata(spellSlotsBindTarget);
}

dv.table(
    ["Level", "Current", "Max"],
    spellSlots.map((spellSlot, index) => [spellSlot.level, `\`INPUT[slider(class(slider-l), addLabels, maxValue(${spellSlot.max})):creature.spells.slots[${index}].current]\``, `\`VIEW[{creature.spells.slots[${index}].current}]\``, `\`INPUT[number(class(number-s)):creature.spells.slots[${index}].max]\``])
);
``` -->

<!-- ```meta-bind-js-view
{creature.spells.slots} as spellSlots
---

function getLine(level, max, index){
    return `| \`VIEW[${level ?? index + 1}][:creature.spells.slots[${index}].level]\` | \`INPUT[slider(class(slider-l), addLabels, maxValue(${max})):creature.spells.slots[${index}].current]\` | \`VIEW[{creature.spells.slots[${index}].current}]\` | \`INPUT[number(class(number-s)):creature.spells.slots[${index}].max]\` |`
}

const str = `
| Level | Current | Max | Max |
| --- | --- | --- | --- |
${
    context.bound.spellSlots
        .map((spellSlot, index)=>getLine(spellSlot.level, spellSlot.max, index))
        .join("\n")
    
}
`;

return engine.markdown.create(str);
``` -->
| Level | Current | Current | Max |
| --- | --- | --- | --- |
| `VIEW[1][:creature.spells.slots[0].level]` | `INPUT[slider(class(slider-l), addLabels, maxValue(10)):creature.spells.slots[0].current]` | `VIEW[{creature.spells.slots[0].current}]` | `INPUT[number(class(number-s)):creature.spells.slots[0].max]` |
| `VIEW[2][:creature.spells.slots[1].level]` | `INPUT[slider(class(slider-l), addLabels, maxValue(10)):creature.spells.slots[1].current]` | `VIEW[{creature.spells.slots[1].current}]` | `INPUT[number(class(number-s)):creature.spells.slots[1].max]` |
| `VIEW[3][:creature.spells.slots[2].level]` | `INPUT[slider(class(slider-l), addLabels, maxValue(10)):creature.spells.slots[2].current]` | `VIEW[{creature.spells.slots[2].current}]` | `INPUT[number(class(number-s)):creature.spells.slots[2].max]` |
| `VIEW[4][:creature.spells.slots[3].level]` | `INPUT[slider(class(slider-l), addLabels, maxValue(10)):creature.spells.slots[3].current]` | `VIEW[{creature.spells.slots[3].current}]` | `INPUT[number(class(number-s)):creature.spells.slots[3].max]` |
| `VIEW[5][:creature.spells.slots[4].level]` | `INPUT[slider(class(slider-l), addLabels, maxValue(10)):creature.spells.slots[4].current]` | `VIEW[{creature.spells.slots[4].current}]` | `INPUT[number(class(number-s)):creature.spells.slots[4].max]` |
| `VIEW[6][:creature.spells.slots[5].level]` | `INPUT[slider(class(slider-l), addLabels, maxValue(10)):creature.spells.slots[5].current]` | `VIEW[{creature.spells.slots[5].current}]` | `INPUT[number(class(number-s)):creature.spells.slots[5].max]` |
| `VIEW[7][:creature.spells.slots[6].level]` | `INPUT[slider(class(slider-l), addLabels, maxValue(10)):creature.spells.slots[6].current]` | `VIEW[{creature.spells.slots[6].current}]` | `INPUT[number(class(number-s)):creature.spells.slots[6].max]` |
| `VIEW[8][:creature.spells.slots[7].level]` | `INPUT[slider(class(slider-l), addLabels, maxValue(10)):creature.spells.slots[7].current]` | `VIEW[{creature.spells.slots[7].current}]` | `INPUT[number(class(number-s)):creature.spells.slots[7].max]` |
| `VIEW[9][:creature.spells.slots[8].level]` | `INPUT[slider(class(slider-l), addLabels, maxValue(10)):creature.spells.slots[8].current]` | `VIEW[{creature.spells.slots[8].current}]` | `INPUT[number(class(number-s)):creature.spells.slots[8].max]` |