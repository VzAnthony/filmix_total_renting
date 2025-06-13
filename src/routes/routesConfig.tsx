import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './RootLayout';
import { Home } from '../pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'top-movies',
                element: <h1>Top movies</h1>,
            },
            {
                path: 'favorites',
                element: <h1>Favorites</h1>,
            },
            {
                path: 'genders',
                element: <h1>Genders</h1>,
            },
            {
                path: 'releases',
                element: <h1>New Releases</h1>,
            },
            {
                path: 'movies/:id',
                element: <h1>MovieDetail</h1>,
            },
        ],
    },
]);

export default router;
