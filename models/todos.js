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
listModel = mongoose.model('todos', listSchema);

exports.create = function(data) {
    const list = new listModel(
        {
            user: data.user,
            name: data.name,
            items: data.items
        }
    )

    return list.save().then(list => {
        console.log(list)
        return true
    }).catch(err => {
        console.log(err)
        return false
    })
}

exports.delete = function(listID) {
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

exports.update = function(listID, newItems) {
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

exports.get = function(listID) {
    return listModel.findOne({_id: listID}).then(list => {
        console.log("Found List")
        return list
    }).catch(err => {
        console.log(err)
        return null
    })
}

