/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_540606152")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2215399828",
    "hidden": false,
    "id": "relation1847283669",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "investment_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_540606152")

  // remove field
  collection.fields.removeById("relation1847283669")

  return app.save(collection)
})
