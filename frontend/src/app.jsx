import { Link, BrowserRouter, Routes, Route} from 'react-router-dom';

// import pages

export default function App() {
    return <>
        <BrowserRouter>
            <Link to ='/' className="text-decoration-none">
                <div className="container-fluid">
                    <header className='bg-dark mx-5 py-2 p-2 bg-light text-white'> Hello World </header>
                </div>
            </Link>

            <Routes>
            </Routes>
        </BrowserRouter>
    </>;
}