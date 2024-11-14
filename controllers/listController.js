listModel = require('../models/listModel')

const listGetHandler = async function (req,res) {
    const listID = req.query.id;

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

module.exports = {listGetHandler, listPostHandler};