// frontend/src/services/resourceService.js
import sendRequest from './sendRequest';

const BASE_URL = '/api/resources';

// Get all resources
export function getAllResources() {
  return sendRequest(`${BASE_URL}`, 'GET');
}

// Get a specific resource by ID
export function getResourceById(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'GET');
}

// Create a new resource
export function createResource(resourceData) {
  return sendRequest(`${BASE_URL}`, 'POST', resourceData);
}

// Update a resource
export function updateResource(id, resourceData) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', resourceData);
}

// Delete a resource
export function deleteResource(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}
