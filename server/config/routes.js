var notes = require('./../controller/notes');

module.exports = function(app) {


    app.post('/process', function(req, res) {
            notes.add(req, res);
        }),

        app.get('/showall', function(req, res) {
            notes.showall(req, res);
        })
}