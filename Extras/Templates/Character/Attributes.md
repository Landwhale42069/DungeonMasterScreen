| Attribute | Profficient | Amount | Modifier |
| --- | --- | --- | --- |
| Strength      | `INPUT[toggle:meta.attributes.StrengthProfficient]`     | `INPUT[number(defaultValue(10)):meta.attributes.Strength]`      | `VIEW[round(({meta.attributes.Strength} - 10)/2, 0) + {meta.attributes.StrengthProfficient}*2]`       |
| Dexterity     | `INPUT[toggle:meta.attributes.DexterityProfficient]`    | `INPUT[number(defaultValue(10)):meta.attributes.Dexterity]`     | `VIEW[round(({meta.attributes.Dexterity} - 10)/2, 0)]`      |
| Constitution  | `INPUT[toggle:meta.attributes.ConstitutionProfficient]` | `INPUT[number(defaultValue(10)):meta.attributes.Constitution]`  | `VIEW[round(({meta.attributes.Constitution} - 10)/2, 0)]`   |
| Intelligence  | `INPUT[toggle:meta.attributes.IntelligenceProfficient]` | `INPUT[number(defaultValue(10)):meta.attributes.Intelligence]`  | `VIEW[round(({meta.attributes.Intelligence} - 10)/2, 0)]`   |
| Wisdom        | `INPUT[toggle:meta.attributes.WisdomProfficient]`       | `INPUT[number(defaultValue(10)):meta.attributes.Wisdom]`        | `VIEW[round(({meta.attributes.Wisdom} - 10)/2, 0)]`         |
| Charisma      | `INPUT[toggle:meta.attributes.CharismaProfficient]`     | `INPUT[number(defaultValue(10)):meta.attributes.Charisma]`      | `VIEW[round(({meta.attributes.Charisma} - 10)/2, 0)]`       |

