```meta-bind-js-view
{creature.health.max} as max
---
const maxValue = context.bound.max ? context.bound.max : 10;

const str = `\`\`\`meta-bind
INPUT[progressBar(class(health-bar), defaultValue(10), maxValue(${maxValue})):creature.health.current]
\`\`\``;

return engine.markdown.create(str);
```

| Max HP | Current HP | Temporary HP |
| --- | --- | --- |
| `INPUT[number(class(number-s),defaultValue(10)):creature.health.max]` | `INPUT[number(class(number-s)):creature.health.current]`| `INPUT[number(class(number-s)):creature.health.temporary]` |
| Max Hit Die | Current Hit Die | Hit Die Size |
| `INPUT[number(class(number-s)):creature.hitdie.max]` | `INPUT[number(class(number-s)):creature.hitdie.current]`| `INPUT[inlineSelect(option(d4),option(d6),option(d8),option(d10),option(d12)):creature.hitdie.size]` |

Success `INPUT[inlineSelect(option(0),option(1),option(2),option(3)):creature.health.deathSavingThrows.success]` Failure `INPUT[inlineSelect(option(0),option(1),option(2),option(3)):creature.health.deathSavingThrows.failure]`
