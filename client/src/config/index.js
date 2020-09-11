export const SPECIAL_CHARACTERS = [
  " ",
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  "|",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

const config = {
  dev:`http://localhost:8080`,
  prod: `http://172.17.0.45:8080`,
}

// allowed column fields for sorting
export const ALLOWED_VALUES_FOR_SORT = [
  'name', 
  'status', 
  'resources', 
  'price', 
  'provider', 
  'complicity', 
  'start_date', 
  'deadline', 
  'offers'
];

// backend endpoint
// export const BASE_URL = 'http://localhost:8080';
export const BASE_URL = process.env.NODE_ENV === 'prod' ? config.prod : config.dev;

// prefixers
export const API = '/api';
export const PROJECT_PREFIX = '/projects';
export const AUTH_PREFIX = '/auth';

// for checking project is drafted
export const PROJECT_DRAFTED = 'save_as_draft';

// tokens
export const AUTHORIZATION_TOKEN_PREFIX = 'Bearer';
export const ACCESS_TOKEN = 'access_token';
export const REFRESH_TOKEN = 'refresh_token';

// formatting
export const CURRENCY = {
  usd: '$'
};

// className for changing structure of component. 
// Use when height of app less than height of popup 
export const CHANGE_COMPONENT_STRUCTURE = 'change-component-structure';