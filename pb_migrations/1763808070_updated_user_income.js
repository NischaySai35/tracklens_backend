/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2852870809")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number4156309958",
    "max": null,
    "min": null,
    "name": "total_income",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date1130519967",
    "max": "",
    "min": "",
    "name": "updated_at",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2852870809")

  // remove field
  collection.fields.removeById("number4156309958")

  // remove field
  collection.fields.removeById("date1130519967")

  return app.save(collection)
})
