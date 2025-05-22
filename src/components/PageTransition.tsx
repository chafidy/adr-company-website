
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingLogo from './LoadingLogo';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <LoadingLogo />
        </div>
      )}
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300"}>
        {children}
      </div>
    </>
  );
};

export default PageTransition;
