let mongoose = require('mongoose');

let Schema = mongoose.Schema;

const todoItemSchema = new Schema({
    name: {type: String, required: true},
    status: {type: Boolean, required: true},
    completedBy: {type: String, required: false}
});

const listSchema = new Schema({
    id: {type: String, required: true},
    user: {type: String, required: true},
    name: {type: String, required: true},
    items: {type: [todoItemSchema]}
});

listSchema.set('toObject', {getters: true, virtuals: true});
listModel = mongoose.model('todos', listSchema);


/* TODO
- Create list
- Delete list
- Update list
*/ 

exports.create = function(data) {
    const list = new listModel(
        {
            id: data.id,
            user: data.user,
            name: data.name,
            items: data.items
        }
    )

    list.save().then(list => {
        console.log(list)
        return "List Saved"
    }).catch(err => {
        console.log(err)
        return "Error"
    })
}

exports.delete = function(listID) {
    listModel.deleteOne({id: listID}).then(res => {
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
    listModel.updateOne({id: listID}, {items: newItems}).then(res => {
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
    listModel.findOne({id: listID}).then(list => {
        console.log("Found List")
        return list
    }).catch(err => {
        console.log(err)
        return err
    })
}

