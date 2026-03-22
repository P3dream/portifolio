import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { track } from '@vercel/analytics';

function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    track('page_view', {
      path: location.pathname,
      page: location.pathname.replace('/', '') || 'home',
    });
  }, [location.pathname]);

  return null;
}

export default PageTracker;