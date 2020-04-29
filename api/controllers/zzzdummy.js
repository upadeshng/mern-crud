const express = require('express');
const app = express();
const routes = express.Router();

// db connection
const db = require('../db');

// drug model
const Post = require('../models/post');

// validation rule
const { validationRules, validate } = require('../validation/post.js')


// get post
app.get('/', (req, res) => {
    res.json({item: 'Welcome post page...'});
});



// post drug
app.post('/', validationRules(), validate, function(req, res){

    console.log(req.body)

    // return res.status(200).json({ daaaa: {} });
    //return res.status(200).json(post);

    var data = {
        title: req.body.title,
        content: req.body.note,
        userId: req.body.userId
    }

    Post.create(data).then(function(post){
        return res.status(200).json({item: post});
    })


    // const title = req.body.title;
    // const content = req.body.note;
    // const userId = req.body.userId;
    //
    // const newPost = new Post({
    //   title, content, userId
    // })
    //
    // newPost.save()
    // .then((post)=>res.status(200).json({result: 'SUCCESS', item: post}))
    // .catch(err => res.status(400).json('Error: ' + err))
    //

    // var titleStr = req.body.data.title
    // // title.check('name', 'Please enter name').notEmpty();

    // check('title', titleStr).isEmail()

    // // Finds the validation errors in this request and wraps them in an object with handy functions
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(422).json({ errors: errors.array() });
    // }

    // console.log('errors', errors)
    // console.log('title is', titleStr)

    // Post.create({
    //     title: 'ds',
    //     content: req.body.note,
    //     userId: 22,
    //   }).then(user => res.json(user));


    // res.send({
    //     type: 'POST',
    //     name: req.body.data.name,
    //     note: req.body.data.note,
    // })

    // Post.findOne({name:req.body.data.name})
    //     .then(drug=>{
    //         if(drug){
    //             console.log('here is data', drug)
    //             return res.status(409).json({error:"Drug already exits"})
    //         }
    //         const newDrug=new Drug(req.body.data)
    //         newDrug.save()
    //                 .then((u)=>{
    //                     console.log('Inserted new drug');
    //                     res.status(200).json(u)
    //                 })
    //                 .catch((e)=>{
    //                     console.log('Drug is not created.');
    //                     return res.status(400).json({error:"Drug is not created"})
    //                 })

    //     })

})

// get drug
// app.get('/', async function(req, res){

//     /*
//     try{
//       const {page, perPage, nameFilter, allFilter} = req.query;
//       const options = {
//         page: parseInt(page, 10) || 1,
//         limit: parseInt(perPage, 10) || 10
//       }

//       //var query = nameFilter ? {"name":nameFilter} : {};
//       var query = {};



//       //allQuery = "ren"
//       if(allFilter){
//           query = {}
//          query = ({"name":allFilter},{"group":allFilter})
//           //query = {"name":allFilter}
//           //
//         // query.push({"group":allFilter})
//       }

//       const drugs = await Drug.paginate(query, options);
//       return res.json(drugs);
//     } catch (err){
//         console.error(err);
//         return res.status(500).send(err);
//     } */

// })

module.exports = app;
