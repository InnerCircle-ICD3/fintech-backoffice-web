import authHandlers from '@/mocks/handlers/auth';
import errorHandlers from '@/mocks/handlers/error';
import LoaderHandlers from '@/mocks/handlers/example-loader';

export default [...errorHandlers, ...LoaderHandlers, ...authHandlers];
