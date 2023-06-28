import { LandingPage, LoginPage, RegisterPage } from './pages'

export const routes = () => [
    {path: '/', element: <LandingPage/>},
    {path: '/login', element: <LoginPage/>},
    {path: '/register', element: <RegisterPage/>}
];