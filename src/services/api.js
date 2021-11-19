const Url = 'https://api.mercadolibre.com/sites/MLB';

export async function getCategories() {
  const categoriesEndPoint = `${Url}/categories`;
  const fetchApi = await fetch(categoriesEndPoint);
  const response = await fetchApi.json();

  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const categoriesAndQueryEndPoint = `${Url}/search?category=${categoryId}&q=${query}`;
  const fetchApi = await fetch(categoriesAndQueryEndPoint);
  const response = await fetchApi.json();

  return response;
}
