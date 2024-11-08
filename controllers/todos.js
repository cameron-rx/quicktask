listModel = require('../models/todos')

function listGetHandler(req,res) {
    const listID = req.query.id;

    if (listID === null)
        res.status(500).send("Must include id query parameter.")

    istModel.get(listID).then(list => {
        if (list) {
            res.status(200).json(list);
        } else {
            res.status(500).send("Invalid list id.")
        }
    })
}

function listPostHandler(req,res) {

}