import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshTokenOperation } from '../redux/auth/authOperations';
import authSelectors from '../redux/auth/authSelectors';
import LoginPage from '../pages/signin/LoginPage';
import DiaryProductsListItem from './DiaryProductsListItem/DiaryProductsListItem';
// import RegisterPage from '../pages/signup/RegisterPage';
// import Basic from './test';

const App = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(authSelectors.isAuthenticated);

    useEffect(() => {
        isAuth && dispatch(refreshTokenOperation());
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {/* <Basic /> */}
            <DiaryProductsListItem />
            <LoginPage />
        </div>
    );
};

export default App;
