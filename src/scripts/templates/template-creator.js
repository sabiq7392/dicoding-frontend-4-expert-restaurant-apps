const createButtonFavoriteTemplate = () => `
  <i class="icon-favorite bi bi-heart"></i> 
  <span class="text-favorite">Add to Favorite</span>
`;

const createButtonFavoritedTemplate = () => `
  <i class="icon-favorite bi bi-heart-fill"></i> 
  <span class="text-favorite">Added to Favorite</span>
`;

export {
  createButtonFavoriteTemplate,
  createButtonFavoritedTemplate,
};
