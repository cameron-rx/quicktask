listModel = require('../models/listModel')

const listGetHandler = async function (req,res) {
    console.log(req.params)
    const listID = req.params.id;
    console.log(listID)

    const list = await listModel.get(listID)

    if (!list) {
        res.status(404).send("List not found.")
        return;
    }

    res.status(200).json(list);
}

const listPostHandler = async function(req,res) {
    const list = req.body
    const savedList = await listModel.create(list)

    if (!savedList) {
        res.status(404).send("List not saved.")
        return;
    }

    console.log(savedList.id)
    res.json({id: savedList.id})
}

//TODO: Implement put handler
//TODO: Implement delete handler

const listDeleteHandler = async function(req, res) {
    console.log("Delete Handler")
    const listID = req.params.id

    
    const deleteResponse = await listModel.delete(listID)

    if (deleteResponse.deletedCount > 0) {
        res.status(200).send("List deleted")
    } else {
        res.status(500).send(deleteResponse.message)
    }
}

const listPutHandler = async function(req, res) {
    console.log("Put Handler")
    const listID = req.params.id
    const updates = req.body
    console.log(req.body)

    const updateResponse = await listModel.update(listID, updates)

    console.log(updateResponse)

    if (updateResponse.modifiedCount > 0) {
        res.status(200).send("List updated")
    } else {
        res.status(500).send("List not updated")
    }
}

module.exports = {listGetHandler, listPostHandler, listDeleteHandler, listPutHandler};