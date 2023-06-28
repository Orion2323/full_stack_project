import { Link, BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';

// import pages

export default function App() {
    return <>
        <Routes>
            <Route path="/" element={<LandingPage />} />
        </Routes>
    </>;
}