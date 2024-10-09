import React, { useState, useEffect } from 'react';
import RecipeTagList from './RecipeTagList';
import RecipeList from './RecipeList';

const TAGS_API = 'https://dummyjson.com/recipes/tags';
const RECIPES_API = (tag: string) => `https://dummyjson.com/recipes/tag/${tag}`;

const App = () => {

  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(TAGS_API);
        const data = await response.json();
        setTags(data); 
      } catch (error) {
        console.error('Error fetching tags:', error);
      } 
    };
    fetchTags();
  }, []);

  const handleTagSelect = async (tagName: string) => {
    setSelectedTag(tagName);
    try {
      const response = await fetch(RECIPES_API(tagName));
      const data = await response.json();
      setRecipes(data.recipes); 
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleBackToTags = () => {
    setSelectedTag(null); 
  };

  return (
    <div>
        <h1>ACME Recipe O'Master</h1>
        
        {!selectedTag ? (
        <RecipeTagList tagList={tags} onSelectTag={handleTagSelect} />
         ) : (
        <RecipeList recipeData={recipes} onBack={handleBackToTags} />
        )}

    </div>
  );
};

export default App;

