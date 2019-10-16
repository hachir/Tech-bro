const express = require('express');
const router = express.Router();
const db = require("../models");

// Get specific article by id with populated notes
router.get("/articles/:id", (req, res) => {
    db.Article.findById(req.params.id)
        .then(data => {
            if (data) {
                res.json(data);
            }
        }).catch(err => {
        res.status(500).send(err);
    });
});

// Update specific article by id.  Used primarily for setting saved value on the Article
router.patch("/articles/:id", (req, res) => {
    db.Article.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}).then((data) => {
        if (data) {
            res.json(data);
        } else {
            res.status(404).send({error: "No article found for this id"});
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

// Get list of notes for a specific article
router.get("/articles/:id/notes", (req, res) => {
    db.Article.findById(req.params.id).populate("notes")
        .then(data => {
            if (data) {
                res.json(data);
            }
        }).catch(err => {
        res.status(500).send(err);
    });
});