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

const BACKEND_URL = {
  dev:`http://localhost:8080`,
  prod: `http://${process.env.IP_ADDRESS}:${process.env.BACKEND_PORT}`
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
export const BASE_URL = BACKEND_URL[process.env.REACT_APP_STAGE] ? 
BACKEND_URL[process.env.REACT_APP_STAGE] : BACKEND_URL.development;

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