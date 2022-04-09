import React from 'react';
import FormTab from '../../components/FormTab/FormTab';
import { Routes, Route } from 'react-router-dom';

import FormLogin from '../../components/FormLogin/FormLogin';
import FormSignin from '../../components/FormSignin/FormSignin';

export default function FormAuth(props) {
    return (
        <div>
            <FormTab>
                <Routes>
                    <Route path="*" element={<FormLogin activeClass={true} />} />
                    <Route path="login" element={<FormLogin />} />
                    <Route path="signin" element={<FormSignin />} />
                </Routes>
            </FormTab>
        </div>
    )
}