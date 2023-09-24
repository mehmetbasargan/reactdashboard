import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Customers from './pages/Customers';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Messages';
import Orders from './pages/Orders';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Transaction from './pages/Transaction';

const Layout = () => {
    return (
        <div className="flex bg-bgColor !h-100vh">
            <div className="sticky !h-100vh  top-0">
                <Sidebar />
            </div>
            <div className="flex flex-col w-full !h-screen z-50">
                <div className="sticky top-0 w-full z-[999]">
                    <Header />
                </div>
                <div className="px-5 py-5 !h-screen overflow-scroll no-scrollbar">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Dashboard /> },
            { path: '/products', element: <Products /> },
            { path: '/product/:id', element: <ProductDetail /> },
            { path: '/orders', element: <Orders /> },
            { path: '/customers', element: <Customers /> },
            { path: '/transaction', element: <Transaction /> },
            { path: '/reports', element: <Reports /> },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
