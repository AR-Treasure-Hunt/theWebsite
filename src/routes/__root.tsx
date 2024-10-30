import { useState, useEffect } from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { SnackbarProvider } from 'notistack';

export const Route = createRootRoute({
  component: RootComponent
});

const DELAY = 500;

function RootComponent() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [isTimeoutPassed, setIsTimeoutPassed] = useState(false);

  useEffect(() => {
    const checkFontLoaded = () => {
      if (document.documentElement.classList.contains('fonts-loaded')) {
        setIsFontLoaded(true);
      } else if (document.documentElement.classList.contains('fonts-failed')) {
        setIsFontLoaded(true);
      } else {
        requestAnimationFrame(checkFontLoaded);
      }
    };

    checkFontLoaded();

    const timer = setTimeout(() => {
      setIsTimeoutPassed(true);
    }, DELAY);

    return () => clearTimeout(timer);
  }, []);

  if (!isFontLoaded && !isTimeoutPassed) {
    return (
      <div className="min-w-screen min-h-screen flex justify-center items-center">
        <div className="loader" />
      </div>
    );
  }

  return (
    <SnackbarProvider autoHideDuration={2000}>
      <Outlet />
    </SnackbarProvider>
  );
}
