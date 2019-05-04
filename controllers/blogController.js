function blogsController(Blog) {
    function post(req, res) {

        const blog = new Blog(req.body);
        if (!req.body.title) {
            res.status(400);
            return res.send("Title is required");
        }
        blog.save();
        res.status(201);
        return res.json(blog);
    }
    function get(req, res) {
        const query = {}

        if (req.query.genre) {
            query.genre = req.query.genre
        }
        Blog.find(query, (err, blogs) => {
            if (err) {
                return res.send(err);
            }
            const foundBlog = blogs.map(blog => {
                const newBlog = blog.toJSON()
                newBlog.links = {};
                newBlog.links.main = `http://${req.headers.host}/api/blogs/${blog.id}`
                return newBlog;
            })
            return res.json(foundBlog)
        })
    }
    return { post, get }
}
module.exports = blogsController;