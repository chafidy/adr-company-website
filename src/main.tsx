
import { createRoot } from 'react-dom/client'
import { useState, useEffect } from 'react'
import App from './App.tsx'
import './index.css'
import LoadingLogo from './components/LoadingLogo.tsx'

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <LoadingLogo fullScreen /> : <App />;
};

createRoot(document.getElementById("root")!).render(<Main />);
