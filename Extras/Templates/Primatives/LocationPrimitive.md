```meta-bind
INPUT[imageSuggester(optionQuery("")):id.picture]
```
`INPUT[textArea:location.identity.description]`
```dataview
TABLE
	file.frontmatter.creature.identity.description as "Description",
	L.affiliation as "Affiliation",
	embed(link(file.frontmatter.id.picture, "200")) as "Picture"
from -"Extras" and #creature and #humanoid
FLATTEN file.frontmatter.locations AS L
WHERE contains(L.name, this.file.name)
```