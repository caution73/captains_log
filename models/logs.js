const { Schema, model } = require('mongoose')

const logSchema = new Schema({
    title: String,
    entry: String,
    shipIsBroken: Boolean
},
{ timestamps: true }
);

const Log = model("Log", logSchema )

module.exports = Log