import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';

const RegisgerPage = () => {
    return (
        <AuthTemplate>
            <RegisterForm />
        </AuthTemplate>
    );
};

export default RegisgerPage;