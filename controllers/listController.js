listModel = require('../models/listModel')

const listGetHandler = async function (req,res) {
    const listID = req.query.id;

    if (!listID) {
        res.status(500).send("Must include id query parameter.")
    } else {
        const list = await listModel.get(listID)

        if (!list) {
            res.status(404).send("List not found.")
            return;
        }

        res.status(200).json(list);
    }

}

const listPostHandler = async function(req,res) {
    const list = req.body

    const savedList = await listModel.create(list)

    if (!savedList) {
        res.status(404).send("List not saved.")
        return;
    }

    res.status(200).send("List saved.")
}

module.exports = {listGetHandler, listPostHandler};