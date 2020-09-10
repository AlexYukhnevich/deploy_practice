import moment from "moment";

export const createDateFromString = (dateString: string) => new Date(dateString);
export const formatDate = (date: Date | null, formatter = "YYYY-MM-DD") => !date ? null : moment(date).format(formatter);

// change format date from 'yyyy-mm-dd' to 'dd-mm-yyyy'
export const changeFormatDate = (date: string) => date ? date.split('-').reverse().join('.') : '';
