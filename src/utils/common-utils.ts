export const isEmpty = (value: string | number | object | null | undefined | boolean): boolean => {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === 'string') {
    return value.trim().length === 0;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (value instanceof Set || value instanceof Map) {
    return value.size === 0;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  return false;
};

export const deepCopy = (obj: object | Array<string | number>) => {
  return JSON.parse(JSON.stringify(obj));
};

export const formatDate = (date: string = '', format: string = 'YYYY-MM-DD') => {
  if (!date) {
    return null;
  }

  const d = new Date(date);

  const map: { [key: string]: string } = {
    YYYY: String(d.getFullYear()),
    MM: ('0' + (d.getMonth() + 1)).slice(-2),
    DD: ('0' + d.getDate()).slice(-2),
    HH: ('0' + d.getHours()).slice(-2),
    MI: ('0' + d.getMinutes()).slice(-2),
    SS: ('0' + d.getSeconds()).slice(-2),
  };

  return format.replace(/YYYY|MM|DD|HH|MI|SS/g, (matched) => map[matched]);
};

export const getCurrentDate = (format: string = 'YYYY-MM-DD HH:MI:SS') => {
  return formatDate(new Date().toISOString(), format);
};
