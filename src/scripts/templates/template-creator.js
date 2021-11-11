const createButtonLikeFavoriteTemplate = () => `
  <i class="icon-favorite bi bi-heart"></i> 
  <span class="text-favorite">Add to Favorite</span>
`;

const createButtonLikedFavoriteTemplate = () => `
  <i class="icon-favorite bi bi-heart-fill"></i> 
  <span class="text-favorite">Added to Favorite</span>
`;

export {
  createButtonLikeFavoriteTemplate,
  createButtonLikedFavoriteTemplate,
};
