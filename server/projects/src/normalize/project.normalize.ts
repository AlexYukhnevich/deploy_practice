import { formatDate } from '../utils'; 

export const normalizeProject = (project) => {
  const { 
    id,
    deadline,
    name,
    offers,
    price,
    provider,
    resources,
    start_date,
    status,
    drafted,
    complicity,
    userId
  } = project;
  return {
    id,
    name,
    status,
    resources,
    price,
    provider,
    complicity,
    start_date: formatDate(start_date),
    deadline: formatDate(deadline),
    offers,
    drafted,
    userId
  }
};