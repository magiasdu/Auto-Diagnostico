import React from 'react';
import { content } from '../content';
import type { DiagnosisKey } from '../types';
import SafeText from './SafeText';

interface ResultProps {
  diagnosisKey: DiagnosisKey | null;
}

const Result: React.FC<ResultProps> = ({ diagnosisKey }) => {
    if (!diagnosisKey) {
        return (
            <div className="text-center p-4 animate-slide-fade-in">
                <h1 className="text-4xl font-bold font-serif text-gray-800 mb-4">Calculando tu diagnóstico...</h1>
                <p className="text-lg text-gray-600">Un momento por favor.</p>
            </div>
        );
    }

    const resultData = content.results[diagnosisKey];

    if (!resultData) {
        return (
            <div className="text-center p-4 animate-slide-fade-in">
                <h1 className="text-4xl font-bold font-serif text-red-600 mb-4">Error</h1>
                <p className="text-lg text-gray-600">No se pudo determinar un diagnóstico. Por favor, intenta de nuevo.</p>
            </div>
        );
    }
    
    return (
        <div className="text-center p-4 max-w-3xl mx-auto">
            <div className="mb-6">
                <svg className="w-16 h-16 mx-auto text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-brand-text mb-6">{resultData.titulo}</h1>
            <SafeText 
              text={resultData.descripcion}
              className="text-xl text-gray-600 mb-12 leading-relaxed block"
            />
            <a
                href={resultData.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-primary text-brand-text font-medium py-4 px-12 rounded-md text-xl hover:bg-[#B2B591] transition-all transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-[#E6E8D6]"
            >
                {resultData.ctaTexto}
            </a>
        </div>
    );
};

export default Result;