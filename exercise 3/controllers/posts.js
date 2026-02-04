const posts = [
    {id: 1, name:"WIILHOOG"},
    {id:2, name:"WIIF JUG"},
    {id:3, name:"macsaro marsade"}
];

export const getPosts = (req,res) => {
  res.send(posts)
}

export const PostsOne = (req,res) => {
    const postsId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postsId);
    if(!post) return res.status(404).send("post not found");
    res.json(post);
}
