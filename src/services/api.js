const Url = 'https://api.mercadolibre.com';

export async function getCategories() {
  const categoriesEndPoint = `${Url}/sites/MLB/categories`;
  const fetchApi = await fetch(categoriesEndPoint);
  const response = await fetchApi.json();

  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const searchEndPoint = `${Url}/sites/MLB/search?category=${categoryId}&q=${query}`;
  const fetchApi = await fetch(searchEndPoint);
  const response = await fetchApi.json();

  return response;
}

export async function getDetail(productId) {
  const categoriesEndPoint = `${Url}/items/${productId}`;
  const fetchApi = await fetch(categoriesEndPoint);
  const response = await fetchApi.json();

  return response;
}
