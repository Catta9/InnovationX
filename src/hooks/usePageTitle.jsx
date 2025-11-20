import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        let title = 'InnovationX';

        switch (path) {
            case '/':
                title += ' | Home';
                break;
            case '/services':
                title += ' | Services';
                break;
            case '/contact':
                title += ' | Contact';
                break;
            default:
                title += ' | Home';
        }

        document.title = title;
    }, [location]);
};

export default usePageTitle;
