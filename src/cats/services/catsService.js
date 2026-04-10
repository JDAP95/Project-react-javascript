import { Breed, Category, Cats } from "../models/cats";

const URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_HheGychxtvcpYbi6G3AZ87zKo10qZ4DLMRHppBPone3WPn73JXRl83A2FR7ogdjl';

async function fetchFromApi(endpoint) {
  const response = await fetch(`${URL}/${endpoint}`, {
    headers: {
      'x-api-key': API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  
  return response.json();
}

export async function getRandomCats(limit = 10, page = 0) {
  const data = await fetchFromApi(`images/search?limit=${limit}&page=${page}`);
  return data.map(cat => new Cats(cat));
}

export async function getBreeds() {
  const data = await fetchFromApi('breeds');
  return data.map(breed => new Breed(breed));
}

export async function getCatsByBreed(breedId, limit = 10, page = 0) {
  const data = await fetchFromApi(`images/search?breed_ids=${breedId}&limit=${limit}&page=${page}`);
  return data.map(cat => new Cats(cat));
}

export async function getCategories() {
  const data = await fetchFromApi('categories');
  return data.map(category => new Category(category));
}

export async function getCatsByCategory(categoryIds = [], limit = 10, page = 0) {
  const param = Array.isArray(categoryIds) ? categoryIds.join(",") : categoryIds;
  const data = await fetchFromApi(`images/search?category_ids=${param}&limit=${limit}&page=${page}`);
  return data.map(cat => new Cats(cat));
}

export async function getCatsByExtension(extensions = [], limit = 10, page = 0) {
  const param = Array.isArray(extensions) ? extensions.join(",") : extensions;
  const data = await fetchFromApi(`images/search?mime_types=${param}&limit=${limit}&page=${page}`);
  return data.map(cat => new Cats(cat));
}