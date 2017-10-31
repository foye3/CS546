const express = require("express");
const router = express.Router();
const data = require("../data");
const recipesData = data.recipes;

//find all comments for a specified recipe
router.get("/recipe/:recipeId",async (req,res) => {
    try {
        const comments = await recipesData.getCommentsByRecipeId(req.params.recipeId);
        res.json(comments);
    } catch (e) {
        console.log(e);
        res.status(404).json({message: "not found"});
    }
});
// find comment by id
router.get("/:commentId",async (req,res) => {
    try {
        const comments = await recipesData.getCommentById(req.params.commentId);
        res.json(comments);
    } catch (e) {
        res.status(404).json({message: "not found"});
    }
});
// add comment
router.post("/:recipeId",async (req,res) => {
    let commentPostData = req.body;
    try {
        await recipesData.getRecipeById(req.params.recipeId);
    } catch (e) {
        res.status(404).json({message: "Recipe not found"});
    }

    try {
        const comments = await recipesData.addComment(req.params.recipeId,commentPostData.poster,commentPostData.comment);
        res.json(comments);
    } catch (e) {
        res.status(500).json({error: e});
    }
});
// update comment
router.put("/:recipeId/:commentId",async (req,res) => {
    let updateData = req.body;
    try {
        await recipesData.getRecipeById(req.params.recipeId);
    } catch (e) {
        res.status(404).json({error: "Recipe not found"});
    }
    try {
        await recipesData.getCommentById(req.params.commentId);
    } catch (e) {
        res.status(404).json({error: "comment not found"});
    }
    try {
        const comment = await recipesData.updateComment(req.params.recipeId,req.params.commentId,updateData);
        res.json(comment);
    } catch (e) {
        console.log(e);
        res.status(500).json({error: e});
    }
});
// delete comment
router.delete("/:id",async (req,res) => {
    try {
        await recipesData.getCommentById(req.params.id);
    } catch (e) {
        res.status(404).json({error: "comment not found"});
    }

    try {
        await recipesData.removeComment(req.params.id);
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json({error: e});
    }
});
module.exports = router;

