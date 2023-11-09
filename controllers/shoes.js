var shoes = require('../models/shoes');
// List of all shoess
exports.shoes_list = async function(req, res) {
    try{
        theshoess = await shoes.find();
        res.send(theshoess);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
};
// for a specific shoes.
exports.shoes_detail = function(req, res) {
res.send('NOT IMPLEMENTED: shoes detail: ' + req.params.id);
};
// Handle shoes create on POST.
exports.shoes_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: shoes create POST');
};
// Handle shoes delete form on DELETE.
exports.shoes_delete = function(req, res) {
res.send('NOT IMPLEMENTED: shoes delete DELETE ' + req.params.id);
};
// Handle shoes update form on PUT.
exports.shoes_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: shoes update PUT' + req.params.id);
};