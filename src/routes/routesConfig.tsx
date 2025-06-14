import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './RootLayout';
import { Favorites, Home, MovieDetails } from '../pages';

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
                path: 'favorites',
                element: <Favorites />,
            },
            {
                path: 'genders',
                element: <h1>Genders</h1>,
            },
            {
                path: 'movies/:id',
                element: <MovieDetails />,
            },
        ],
    },
]);

export default router;
