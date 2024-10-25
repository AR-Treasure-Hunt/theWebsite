import { useState, useEffect } from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

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
  }, []);

  if (!isFontLoaded) {
    return (
      <div className="min-w-screen min-h-screen flex justify-center items-center">
        <div className='loader' />
      </div>
    )
  }

  return (
    <>
      <Outlet />
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </>
  )
}
