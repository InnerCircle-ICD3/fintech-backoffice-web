import { ReactNode } from 'react';

import { Navigate } from 'react-router-dom';


interface PrivateRouteProps {
    element: ReactNode;
}

const PrivateRoute = (props: PrivateRouteProps) => {
    const { element } = props;

    //const { auth } = useAccessAuth();
    //TODO 임시 access 처리
    const auth = 'access';

    if (auth === 'access') {
        return element;
    } else if (auth === 'denied') {
        return <Navigate to={'/auth/login'} />;
    }
};

export default PrivateRoute;
