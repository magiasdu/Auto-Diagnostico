import React, { useState, useCallback, useMemo } from 'react';
import { QUIZ_DATA } from './constants';
import { DiagnosisKey, Tag } from './types';
import Welcome from './components/Welcome';
import Question from './components/Question';
import Result from './components/Result';
import ProgressBar from './components/ProgressBar';

type GameState = 'welcome' | 'playing' | 'finished';
type AnimationState = 'in' | 'out';

const App: React.FC = () => {
    // State for core game logic
    const [gameState, setGameState] = useState<GameState>('welcome');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [tagCounts, setTagCounts] = useState<{ [key in Tag]: number }>({ erudito: 0, paciente: 0 });
    const [finalDiagnosis, setFinalDiagnosis] = useState<DiagnosisKey | null>(null);

    // State for managing component transitions and animations
    const [animationState, setAnimationState] = useState<AnimationState>('in');
    const [nextAction, setNextAction] = useState<(() => void) | null>(null);

    const calculateDiagnosis = useCallback((finalScore: number, finalTags: { [key in Tag]: number }): DiagnosisKey => {
        if (finalScore <= 8) return DiagnosisKey.TORRE_CAIDA;
        if (finalScore >= 18) return DiagnosisKey.PARAISO_TERRENAL;
        if (finalScore >= 14 && finalScore <= 17) return DiagnosisKey.FORJA_REY;
        
        if (finalScore >= 9 && finalScore <= 13) {
            const { erudito, paciente } = finalTags;
            if (erudito > paciente) return DiagnosisKey.LABORATORIO_ERUDITO;
            if (paciente > erudito) return DiagnosisKey.LABORATORIO_REY_PACIENTE;
            if (erudito > 0 && erudito === paciente) return DiagnosisKey.TRANSICION_LABORATORIO;
            
            // Default for this score range if tags are 0 or inconclusive
            return DiagnosisKey.LABORATORIO_REY_PACIENTE;
        }

        // Fallback diagnosis, though score ranges should cover all cases.
        return DiagnosisKey.TORRE_CAIDA;
    }, []);

    // Triggers the 'out' animation and queues the next state update.
    const triggerTransition = useCallback((action: () => void) => {
        setNextAction(() => action);
        setAnimationState('out');
    }, []);

    // This function is called when the exit animation finishes.
    const onExitAnimationEnd = () => {
        if (nextAction) {
            nextAction();
            setNextAction(null);
            setAnimationState('in');
        }
    };

    const handleAnswerSelect = useCallback((puntos: number, tag?: Tag) => {
        triggerTransition(() => {
            const newScore = score + puntos;
            const newTagCounts = { ...tagCounts };
            if (tag) {
                newTagCounts[tag]++;
            }

            setScore(newScore);
            setTagCounts(newTagCounts);

            if (currentQuestionIndex < QUIZ_DATA.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
            } else {
                const diagnosis = calculateDiagnosis(newScore, newTagCounts);
                setFinalDiagnosis(diagnosis);
                setGameState('finished');
            }
        });
    }, [score, tagCounts, currentQuestionIndex, calculateDiagnosis, triggerTransition]);
    
    const handleStartQuiz = useCallback(() => {
        triggerTransition(() => {
            setGameState('playing');
        });
    }, [triggerTransition]);

    const currentComponent = useMemo(() => {
        switch (gameState) {
            case 'welcome':
                return <Welcome onStart={handleStartQuiz} />;
            case 'playing':
                return <Question
                            key={currentQuestionIndex}
                            questionData={QUIZ_DATA[currentQuestionIndex]}
                            onAnswer={handleAnswerSelect}
                            currentQuestionNum={currentQuestionIndex + 1}
                        />;
            case 'finished':
                return <Result diagnosisKey={finalDiagnosis} />;
            default:
                return null; // Should not happen
        }
    }, [gameState, currentQuestionIndex, finalDiagnosis, handleStartQuiz, handleAnswerSelect]);

    return (
        <>
            {gameState === 'playing' && (
                <ProgressBar current={currentQuestionIndex + 1} total={QUIZ_DATA.length} />
            )}
            <main className="flex items-center justify-center min-h-screen relative overflow-hidden font-sans">
                <div 
                    className="w-full h-full flex items-center justify-center p-4"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    <div
                      key={`${gameState}-${currentQuestionIndex}`}
                      className={animationState === 'in' ? 'animate-enter' : 'animate-exit'}
                      onAnimationEnd={animationState === 'out' ? onExitAnimationEnd : undefined}
                    >
                        {currentComponent}
                    </div>
                </div>
            </main>
        </>
    );
};

export default App;
