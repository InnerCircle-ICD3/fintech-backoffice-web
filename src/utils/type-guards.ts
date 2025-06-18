/**
 * 값이 null 또는 undefined인지 확인하는 타입 가드
 */
const isNullish = <T>(value: T): value is Extract<null | undefined, T> => {
  return value === null || value === undefined;
};

/**
 * 값이 null 또는 undefined가 아닌지 확인하는 타입 가드
 */
const isNotNullish = <T>(value: T): value is NonNullable<T> => {
  return value !== null && value !== undefined;
};

export { isNotNullish, isNullish };
