```meta-bind-embed
[[QuestIdPrimitive]]
```
`INPUT[textArea:quest.description]`
## Quest Steps
```dataview
TABLE WITHOUT ID
    file.link as "Step"
FROM #queststep
WHERE file.frontmatter.quest.id = this.file.frontmatter.quest.id
```
## People of Interest
```dataview
TABLE WITHOUT ID
    file.link as "Item",
    questRelates.description as "Relate",
    file.frontmatter.creature.identity.description as "Description",
    embed(link(file.frontmatter.id.picture, "200")) as "Picture"
FROM -"Extras" and #creature
FLATTEN file.frontmatter.creature.questrelates AS questRelates
WHERE questRelates.quest = this.file.name
```
## Items of Interest
```dataview
TABLE WITHOUT ID
    file.link as "Item",
    questRelates.description as "Relate",
    file.frontmatter.object.description as "Description",
    embed(link(file.frontmatter.id.picture, "200")) as "Picture"
FROM -"Extras" and #object
FLATTEN file.frontmatter.object.questrelates AS questRelates
WHERE questRelates.quest = this.file.name and file.frontmatter.object.questitem = true
```