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
// Handle shoes delete on DELETE.
exports.shoes_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await shoes.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

    // Handle a show one view with id specified by query
exports.shoes_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await shoes.findById( req.query.id)
    res.render('shoesdetail',
    { title: 'shoes Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
// for a specific shoes.
exports.shoes_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await shoes.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle shoes create on POST.
exports.shoes_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: shoes create POST');
};
/*// Handle shoes delete form on DELETE.
exports.shoes_delete = function(req, res) {
res.send('NOT IMPLEMENTED: shoes delete DELETE ' + req.params.id);
};*/

// Handle Costume update form on PUT.
exports.shoes_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await shoes.findById( req.params.id)
// Do updates of properties
if(req.body.shoe_brand)
toUpdate.shoe_brand = req.body.shoe_brand;
if(req.body.shoe_size) toUpdate.shoe_size = req.body.shoe_size;
if(req.body.shoe_price) toUpdate.shoe_price = req.body.shoe_price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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
// for a specific shoes.
exports.shoes_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await shoes.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};
