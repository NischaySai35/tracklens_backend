/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1691921218")

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
    "id": "select105650625",
    "maxSelect": 2,
    "name": "category",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Education",
      "food",
      "skills",
      "fun activity",
      "savings",
      "grocery",
      "clothing"
    ]
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3485334036",
    "max": 0,
    "min": 0,
    "name": "note",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
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
  const collection = app.findCollectionByNameOrId("pbc_1691921218")

  // remove field
  collection.fields.removeById("number2392944706")

  // remove field
  collection.fields.removeById("select105650625")

  // remove field
  collection.fields.removeById("text3485334036")

  // remove field
  collection.fields.removeById("date2862495610")

  return app.save(collection)
})
