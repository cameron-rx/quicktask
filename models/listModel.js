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
    console.log("Create");
    const list = await listModel.create({user: "servertest", name: "list", items: [{name: "item1", status: false}]})
    return list;
}

exports.delete = async function(listID) {
    return listModel.deleteOne({_id: listID}).then(res => {
        if (res.n > 0) {
            console.log("Deleted Document")
            return "Document Deleted"
        } else {
            console.log("Document Not Found")
            return "Document Not Found"
        }
    }).catch(err => {
        console.log(err)
        return "Error"
    })
}

exports.update = async function(listID, newItems) {
    return listModel.updateOne({_id: listID}, {items: newItems}).then(res => {
        if (res.matchedCount > 0) {
            console.log("Found list to update");
        } else {
            console.log("Couldnt find list to update");
            return "No list found to update"
        }

        if (res.modifiedCount > 0){
            console.log("List updated")
            return "List updated"
        }
    }).catch(err => {
        console.log(err)
        return err
    })
}

exports.get = async function(listID) {
    return listModel.findOne({_id: listID}).then(list => {
        console.log("Found List")
        return list
    }).catch(err => {
        console.log(err)
        return null
    })
}

