/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2852870809")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3754236674",
    "hidden": false,
    "id": "relation2809058197",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "user_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2852870809")

  // remove field
  collection.fields.removeById("relation2809058197")

  return app.save(collection)
})
