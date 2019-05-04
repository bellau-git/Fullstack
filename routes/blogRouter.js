const express = require('express');
const blogController = require('../controllers/blogController')

function routes(Blog) {
    const blogRouter = new express.Router();
    const controller = blogController(Blog);

    blogRouter.route('/blog')
    .get(controller.get)
    .post(controller.post);

    blogRouter.user('/blog/:id', (req, res, next) => {
        Blog.findById(req.params.id, (err, blog) => {
            if(err) {
                return res.send(err);
            }
            if (blog) {
                req.blog = blog;
                return next();
            }
            return res.sendStatus(404);
        })
    })

    blogRouter.route('/blog/:id')
    .get( (req, res) => {
        const blog = req.blog.toJSON();
        blog.links = {};
    })
    .put( (req,res) => {
        const blog = {req}

        blog.title = req.body.title;
        blog.text = req.body.text;
        book.img = req.body.img;
        blog.read = req.body.read

        req.blog.update ( (err) => {
            if (err) {
                return res.send(err)
            }
            return res.send(req.blog.toJSON());
        })
    })
    .delete ( (req, res) => {
        req.blog.remove (err => {
            if(err) {
                return res.send(err);
            }
            return res.sendStatus(204);
        })
    })
    return blogRouter;
}
module.exports = routes;