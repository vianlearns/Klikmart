import type { ReactNode } from 'react';

interface MobileContainerProps {
    children: ReactNode;
    className?: string;
}

export function MobileContainer({ children, className = '' }: MobileContainerProps) {
    return (
        <div className={`relative min-h-screen w-full max-w-md mx-auto bg-white dark:bg-[#1a120b] shadow-2xl overflow-hidden flex flex-col ${className}`}>
            {children}
        </div>
    );
}
