'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

interface SmoothScrollLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    target?: string;
    scrollOptions?: {
        duration?: number;
        easing?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';
        offset?: number;
    };
}

export const SmoothScrollLink = ({ 
    href, 
    children, 
    className = "", 
    onClick,
    target,
    scrollOptions = {}
}: SmoothScrollLinkProps) => {
    const { scrollToElement } = useSmoothScroll();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Si c'est un lien externe ou a un target, laisser le comportement par défaut
        if (target || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
            return;
        }

        // Si c'est une ancre sur la même page
        if (href.startsWith('#')) {
            e.preventDefault();
            const elementId = href.substring(1);
            scrollToElement(elementId, scrollOptions);
        } else if (href.includes('#')) {
            // Si c'est un lien vers une ancre sur une autre page
            e.preventDefault();
            const [path, anchor] = href.split('#');
            
            // Si on est déjà sur la bonne page
            if (path === window.location.pathname || path === '') {
                scrollToElement(anchor, scrollOptions);
            } else {
                // Navigation vers une autre page avec ancre
                // On peut utiliser Next.js router pour une meilleure expérience
                window.location.href = href;
            }
        }

        // Appeler le onClick personnalisé si fourni
        if (onClick) {
            onClick();
        }
    };

    return (
        <Link 
            href={href} 
            className={className}
            onClick={handleClick}
            target={target}
        >
            {children}
        </Link>
    );
}; 