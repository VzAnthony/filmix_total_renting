import { createBrowserRouter, Navigate } from 'react-router-dom';
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
                path: 'movies',
                element: <Navigate to="/" replace />,
            },
            {
                path: 'movies/:id',
                element: <MovieDetails />,
            },
        ],
    },
]);

export default router;
