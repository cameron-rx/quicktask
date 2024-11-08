listModel = require('../models/todos')

function listGetHandler(req,res) {
    const listID = req.query.id;

    if (!listID) {
        res.status(500).send("Must include id query parameter.")
    }

    listModel.get(listID).then(list => {
        if (list) {
            res.status(200).json(list);
        } else {
            res.status(500).send("Invalid list id.")
        }
    })
}

function listPostHandler(req,res) {
    const list = JSON.parse(req.body)

    listModel.create(list).then(completed => {
        if (completed){
            res.status("200").send("Added list to database")
        }
    })
}