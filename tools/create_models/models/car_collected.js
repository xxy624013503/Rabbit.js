module.exports = {
  "id": {
    "type": "varchar(40)",
    "allowNull": false,
    "defaultValue": null,
    "primaryKey": true,
    "comment": null
  },
  "user_id": {
    "type": "varchar(20)",
    "allowNull": false,
    "defaultValue": null,
    "primaryKey": false,
    "comment": null
  },
  "car_id": {
    "type": "varchar(40)",
    "allowNull": false,
    "defaultValue": null,
    "primaryKey": false,
    "comment": null
  },
  "collect_time": {
    "type": "timestamp",
    "allowNull": true,
    "defaultValue": null,
    "primaryKey": false,
    "comment": null
  }
}