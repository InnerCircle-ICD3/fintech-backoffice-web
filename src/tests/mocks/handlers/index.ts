import authHandlers from './auth-handlers';
import errorHandlers from './error-handlers';
import exampleLoaderHandlers from './example-loader-handlers';
import merchantsHandlers from './merchants-handlers';

export default [...errorHandlers, ...exampleLoaderHandlers, ...authHandlers, ...merchantsHandlers];
