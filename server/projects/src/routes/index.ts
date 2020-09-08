import { 
  add, 
  getOne, 
  get, 
  remove, 
  update,
  sort,
  search, 
  getMy,
  getAcquired, 
  getSaved,
  notFound,
} from '../controllers';

import {
  addProjectValidationRules,
  removeProjectValidationRules,
  updateProjectValidationRules,
  sortProjectValidationRules,
  searchProjectValidationRules,
} from '../validation';

const projectPrefix = "/projects";
const apiPrefix = '/api';

export default [
  {
    path: `${apiPrefix}${projectPrefix}/my`,
    method: "GET",
    validations: [],
    handler: getMy,
  },
  {
    path: `${apiPrefix}${projectPrefix}/acquired`,
    method: "GET",
    validations: [],
    handler: getAcquired,
  },
  {
    path: `${apiPrefix}${projectPrefix}/saved`,
    method: "GET",
    validations: [],
    handler: getSaved,
  },
  {
    path: `${apiPrefix}${projectPrefix}/search`,
    method: "GET",
    validations: searchProjectValidationRules,
    handler: search,
  },
  {
    path: `${apiPrefix}${projectPrefix}/sort`,
    method: "GET",
    validations: sortProjectValidationRules,
    handler: sort,
  },
  {
    path: `${apiPrefix}${projectPrefix}/`,
    method: "GET",
    validations: [],
    handler: get,
  },
  {
    path: `${apiPrefix}${projectPrefix}/:id`,
    method: "PUT",
    validations: updateProjectValidationRules,
    handler: update,
  },
  {
    path: `${apiPrefix}${projectPrefix}/`,
    method: "POST",
    validations: addProjectValidationRules,
    handler: add,
  },
  {
    path: `${apiPrefix}${projectPrefix}/:id`,
    method: "DELETE",
    validations: removeProjectValidationRules,
    handler: remove,
  },
  {
    path: '*',
    method: 'ALL',
    validations: [],
    handler: notFound,
  }
];