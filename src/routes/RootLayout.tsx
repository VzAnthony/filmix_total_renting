import { Outlet } from 'react-router-dom';
import { Breadcrumbs, Footer, Header } from '../components';

const RootLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumbs />
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default RootLayout;