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