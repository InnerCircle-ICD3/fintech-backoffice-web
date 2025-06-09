import apiKeyHandlers from './api-key-handlers';
import authHandlers from './auth-handlers';
import errorHandlers from './error-handlers';
import merchantsHandlers from './merchants-handlers';
import sdkHandlers from './sdk-handlers';
import transactionHandlers from './transaction-handlers';

export default [
  ...errorHandlers,
  ...authHandlers,
  ...sdkHandlers,
  ...merchantsHandlers,
  ...apiKeyHandlers,
  ...transactionHandlers,
];
