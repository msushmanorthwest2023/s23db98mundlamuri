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
// VIEWS
// Handle a show all view
exports.shoes_view_all_Page = async function(req, res) {
    try{
    theshoess = await shoes.find();
    res.render('shoes', { title: 'shoes Search Results', results: theshoess });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // Handle shoes create on POST.
exports.shoes_create_post = async function(req, res) {
console.log(req.body)
let document = new shoes();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"shoes_type":"goat", "cost":12, "size":"large"}
document.shoe_brand = req.body.shoe_brand;
document.shoe_size = req.body.shoe_size;
document.shoe_price = req.body.shoe_price;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// for a specific Costume.
exports.costume_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await Costume.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};
