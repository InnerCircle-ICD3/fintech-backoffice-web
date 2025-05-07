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