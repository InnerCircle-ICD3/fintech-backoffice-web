import errorHandlers from './error-handlers';
import exampleLoaderHandlers from './example-loader-handlers';
import authHandlers from './auth-handlers';

export default [...errorHandlers, ...exampleLoaderHandlers, ...authHandlers];
