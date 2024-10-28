import React from 'react'

export const useHandleSmoothScroll = (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    const target = document.getElementById(id);

    if(!target) return;
    
    const offsetPosition = target.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
    });
}
