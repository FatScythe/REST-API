const express = require("express");
const router = express.Router();
const Post = require("../model/Posts");

// GETS ALL THE POST
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json({ success: true, posts });
  } catch (err) {
    res.json({ success: false, messsage: err });
  }
});

// SUBMITS A POST
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  const post = new Post({
    title,
    description,
  });
  try {
    const savedPost = await post.save();
    // res.json({ success: true, data: savedPost });
    res.send("Post as been added sucessfully");
  } catch (err) {
    res.json({ success: false, messsage: err });
  }

  // post.save().then((data) => {
  //   res.json({ success: true, data });
  // })
  // .catch((err) => res.json({ success: false, messsage: err }));
});

// GETS A SPECIFIC POST
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const specificPost = await Post.findById(id);
    res.json({ success: true, data: specificPost });
  } catch (err) {
    res.json({ success: false, messsage: err });
  }
});

// DELETE A POST
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Post.findOneAndDelete({ _id: id });
    res.json({ success: true, messsage: `deleted post with the id: ${id}` });
  } catch (err) {
    res.json({ success: false, messsage: err });
  }
});

// UPDATE A POST
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const updatePost = await Post.updateOne(
      { _id: id },
      { $set: { title, description } }
    );
    res.json({ success: true, data: updatePost });
  } catch (err) {
    res.json({ success: false, messsage: err });
  }
});

module.exports = router;
