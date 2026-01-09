import type { ReactNode } from 'react';

interface MobileContainerProps {
    children: ReactNode;
    className?: string;
}

export function MobileContainer({ children, className = '' }: MobileContainerProps) {
    return (
        <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 flex justify-center items-start">
            <div className={`relative w-full mx-auto bg-white dark:bg-[#1a120b] flex flex-col min-h-screen md:w-full md:bg-transparent md:dark:bg-transparent md:shadow-none ${className}`}>
                {children}
            </div>
        </div>
    );
}
