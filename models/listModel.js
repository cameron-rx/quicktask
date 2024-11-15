let mongoose = require('mongoose');

let Schema = mongoose.Schema;

const todoItemSchema = new Schema({
    name: {type: String, required: true},
    status: {type: Boolean, required: true},
    completedBy: {type: String, required: false}
});

const listSchema = new Schema({
    user: {type: String, required: true},
    name: {type: String, required: true},
    items: {type: [todoItemSchema]}
});

listSchema.set('toObject', {getters: true, virtuals: true});
const listModel = mongoose.model('todos', listSchema);

exports.create = async function(data) {
    const list = await listModel.create(data)
    return list;
}

exports.delete = async function(listID) {
    const dbResponse = await listModel.deleteOne({_id: listID})
    return dbResponse;
}

exports.update = async function(listID, updatedList) {
    const update = listModel.updateOne({_id: listID}, updatedList)
    return update
}


exports.get = async function(listID) {
    const list = await listModel.findById(listID)
    return list
}

