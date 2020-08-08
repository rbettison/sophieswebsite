const db = require('../models');
const Entry = db.entry;

exports.getEntries = (req, res) => {
    Entry.findAll().then((entries) => {
        res.status(200).send({
            entries: entries
        })
    });
}

exports.getEntryById = (req, res) => {
    Entry.findOne({
        where: {
            id: req.params.entryId
        }
    }).then(entry => {
        res.status(200).send({
            entry: entry
        })
    })
}

exports.createEntry = (req, res) => {
    Entry.create({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image
    }).then(entry => {
        res.status(200).send({
            entry: entry
        })
    }) 
}     

exports.updateEntry = (req, res) => {
    Entry.update(
        {
            title: req.body.title,
            description: req.body.description,
            image: req.body.image
        },
        {
            where: {
                id: req.body.id
            } 
        }
        ).then(() => {
            Entry.findOne({
                where: {
                    id: req.body.id
                }
            }).then(entry => {
                res.status(200).send({
                    entry: entry
                })
            })
        })
}