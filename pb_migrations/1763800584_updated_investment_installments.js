/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_540606152")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "number2392944706",
    "max": null,
    "min": null,
    "name": "amount",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date2862495610",
    "max": "",
    "min": "",
    "name": "date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_540606152")

  // remove field
  collection.fields.removeById("number2392944706")

  // remove field
  collection.fields.removeById("date2862495610")

  return app.save(collection)
})
