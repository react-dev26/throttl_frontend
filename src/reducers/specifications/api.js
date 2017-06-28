import { API } from 'setup/config';

export function loadSpecifications() {
  return fetch(`${API}specifications`)
    .then(res => res.json());
}
export function loadSpecification(specificationId) {
  return fetch(`${API}specifications/${specificationId}`)
    .then(res => res.json());
}
export default {
  loadSpecifications,
  loadSpecification,
};
