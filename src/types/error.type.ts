export const ERROR_HANDLING_STRATEGIES = {
  logout: [401, 403],
  notFound: [404],
  errorPage: [500, 502],
  ignore: [400],
} as const;

export const DEFAULT_ERROR_MESSAGE = '오류가 발생했어요';
export const DEFAULT_ERROR_HANDLING_STRATEGY = 'errorPage';

export const ERROR_HANDLING_STRATEGY_MAP = Object.entries(ERROR_HANDLING_STRATEGIES) as unknown as [
  ErrorHandlingStrategy,
  HandledErrorCode[],
][];

export const HANDLED_ERROR_CODES = Object.values(ERROR_HANDLING_STRATEGIES).flat();

export type ErrorHandlingStrategy = keyof typeof ERROR_HANDLING_STRATEGIES;
export type ErrorHandler = `${ErrorHandlingStrategy}Strategy`;
export type HandledErrorCode = (typeof HANDLED_ERROR_CODES)[number];

export const isHandledErrorCode = (code: number): code is HandledErrorCode =>
  HANDLED_ERROR_CODES.includes(code as HandledErrorCode);
