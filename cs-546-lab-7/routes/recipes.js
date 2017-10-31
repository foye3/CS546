const express = require("express");
const router = express.Router();
const data = require("../data");
const recipesData = data.recipes;

// find recipe by id 
router.get("/:id", async (req, res) => {
    try {
        const recipe = await recipesData.getRecipeById(req.params.id);
        res.json(recipe);
    } catch (e) {
        //not found
        res.status(404).json({ message: "recipe not found" });
    }
});
// find all recipes
router.get("/", async (req, res) => {
    try {
        const recipes = await recipesData.getAllRecipes();
        res.json(recipes);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});
// add a new recipe
router.post("/", async (req, res) => {
    try {
        let recipePostData = req.body;
        const newrecipe = await recipesData.addRecipe(recipePostData.title, recipePostData.ingredients, recipePostData.steps);
        res.json(newrecipe);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});
// update recipe with given information
router.put("/:id", async (req, res) => {
    let updateData = req.body;
    try {
        await recipesData.getRecipeById(req.params.id);
    } catch (e) {
        res.status(404).json({ error: "recipe not found" });
    }

    try {

        const updatedrecipe = await recipesData.updateRecipe(req.params.id, updateData);
        res.json(updatedrecipe);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});
// delete a recipe
router.delete("/:id", async (req, res) => {
    try {
        await recipesData.getRecipeById(req.params.id);
    } catch (e) {
        res.status(404).json({ error: "recipe not found" });
    }
    try {
        await recipesData.removeRecipe(req.params.id);
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

module.exports = router;