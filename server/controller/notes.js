var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    add: function(req, res) {
        console.log("########", req.body);
        Note.create({ text: req.body.note }, function(err, note) {
            if (err) {
                console.log(err);
            } else {
                Note.find({}).sort("-createdAt").exec(function(err, notes) {
                    if (err) {
                        console.log("something went wrong")
                    } else {
                        res.json(notes);
                    }
                })

            }
        })
    },
    showall: function(req, res) {
        Note.find({}).sort("-createdAt").exec(function(err, notes) {
            if (err) {
                console.log("Something went wrong!")
            } else {
                console.log(notes);
                res.json(notes);
            }
        })
    }

}