export const fetchRecipes = (searchQuery) => {
  return fetch(`http://localhost:7890/api/v1/recipes/?searchQuery=${searchQuery}`)
    .then(res => res.json())
    .then(json => json.map(({ id, title, image }) => ({
      id,
      title,
      image
    })));
};

export const fetchRecipe = (id) => {
  return fetch(`http://localhost:7890/api/v1/recipes/${id}`)
    .then(res => res.json())
    .then(json => ({
      title: json.title,
      image: json.image,
      ingredients: json.ingredients,
      measures: json.measures,
      instructions: json.instructions
    }));
};

