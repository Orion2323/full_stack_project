import { LandingPage, LoginPage, RegisterPage, InnerLandingPage } from './pages'

export const routes = () => [
    {path: '/', element: <LandingPage/>},
    {path: '/login', element: <LoginPage/>},
    {path: '/register', element: <RegisterPage/>},
    {path: '/inner-home', element: <InnerLandingPage/>}
];