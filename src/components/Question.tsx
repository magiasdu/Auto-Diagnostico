import React, { useEffect, useCallback } from 'react';
import type { QuestionType, OptionType } from '../types';

interface QuestionProps {
  questionData: QuestionType;
  onAnswer: (puntos: number, tag?: 'erudito' | 'paciente') => void;
  currentQuestionNum: number;
}

const Option: React.FC<{ option: OptionType; charCode: number; onSelect: () => void }> = ({ option, charCode, onSelect }) => (
    <button
        onClick={onSelect}
        className="group flex items-start w-full text-left p-4 my-3 border-2 border-gray-300 rounded-lg hover:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-200 bg-white shadow-sm"
    >
        <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 mt-1 mr-5 text-brand-primary border-2 border-brand-primary rounded group-hover:bg-brand-primary group-hover:text-brand-text transition-colors duration-200 font-bold text-sm">
            {String.fromCharCode(charCode)}
        </span>
        <span className="text-lg text-brand-text group-hover:text-brand-text flex-1">{option.texto}</span>
    </button>
);


const Question: React.FC<QuestionProps> = ({ questionData, onAnswer, currentQuestionNum }) => {
  const handleSelect = (option: OptionType) => {
    onAnswer(option.puntos, option.tag);
  };

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const key = event.key.toLowerCase();
    let optionIndex = -1;

    // Check for letter keys (A, B, C...)
    if (key.length === 1 && key >= 'a' && key <= 'z') {
        const index = key.charCodeAt(0) - 'a'.charCodeAt(0);
        if (index < questionData.opciones.length) {
            optionIndex = index;
        }
    }
    
    // Check for number keys (1, 2, 3...)
    const numKey = parseInt(key, 10);
    if (!isNaN(numKey) && numKey > 0 && numKey <= questionData.opciones.length) {
        optionIndex = numKey - 1;
    }

    if (optionIndex !== -1) {
        event.preventDefault();
        handleSelect(questionData.opciones[optionIndex]);
    }
  }, [questionData, onAnswer]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="w-full max-w-3xl p-4">
        <div className="flex items-center text-brand-primary font-medium mb-4 text-lg">
            <span>Pregunta {currentQuestionNum}</span>
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif text-brand-text mb-10 leading-tight">
            {questionData.pregunta}
        </h2>
        <div>
            {questionData.opciones.map((option, index) => (
                <Option 
                    key={index}
                    option={option}
                    charCode={65 + index} // A, B, C...
                    onSelect={() => handleSelect(option)}
                />
            ))}
        </div>
    </div>
  );
};

export default Question;