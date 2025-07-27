import React, { useEffect, useCallback } from 'react';
import { content } from '../content';

interface WelcomeProps {
    onStart: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart }) => {

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            onStart();
        }
    }, [onStart]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <div className="text-center p-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif text-brand-text mb-6">
                {content.welcome.title}
            </h1>
            <p 
                className="text-xl text-gray-600 mb-10 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: content.welcome.description }}
            />
            <button
                onClick={onStart}
                className="bg-brand-primary text-brand-text font-medium py-3 px-12 rounded-md text-lg hover:bg-[#B2B591] transition-all transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-[#E6E8D6]"
            >
                {content.welcome.buttonText}
            </button>
        </div>
    );
};

export default Welcome;