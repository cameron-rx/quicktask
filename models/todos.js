let mongoose = require('mongoose');

let Schema = mongoose.Schema;

const todoItemSchema = new Schema({
    name: {type: String, required: true},
    status: {type: Boolean, required: true}
});

const listSchema = new Schema({
    id: {type: String, required: true},
    user: {type: String, required: true},
    name: {type: String, required: true},
    items: {type: [todoItemSchema]}
});

listSchema.set('toObject', {getters: true, virtuals: true});
module.exports = mongoose.model('todos', listSchema);