import React, { useState } from 'react';
import './styles/QuizFeature.css';

function QuizFeature() {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    // Sample flashcard data - replace with your actual data
    const sampleCards = [
        {
            id: 1,
            question: "What is the capital of France?",
            answer: "Paris"
        },
        {
            id: 2,
            question: "What is 2 + 2?",
            answer: "4"
        },
        {
            id: 3,
            question: "Which planet is closest to the Sun?",
            answer: "Mercury"
        },
        {
            id: 4,
            question: "What is the largest ocean on Earth?",
            answer: "Pacific Ocean"
        }
    ];

    const currentCard = sampleCards[currentCardIndex];

    const handleCardFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleCorrect = () => {
        setScore(score + 1);
        handleNextCard();
    };

    const handleIncorrect = () => {
        handleNextCard();
    };

    const handleNextCard = () => {
        if (currentCardIndex + 1 < sampleCards.length) {
            setCurrentCardIndex(currentCardIndex + 1);
            setIsFlipped(false);
        } else {
            setShowResults(true);
        }
    };

    const resetQuiz = () => {
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setScore(0);
        setShowResults(false);
    };

    if (showResults) {
        return (
            <div className="quiz-container">
                <div className="quiz-results">
                    <h2>Quiz Complete!</h2>
                    <p>Your Score: {score} out of {sampleCards.length}</p>
                    <p>Percentage: {Math.round((score / sampleCards.length) * 100)}%</p>
                    <button onClick={resetQuiz} className="restart-btn">
                        Take Quiz Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <h2>Flashcard Quiz</h2>
                <div className="progress">
                    Card {currentCardIndex + 1} of {sampleCards.length}
                </div>
            </div>

            <div className="card-section">
                <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
                    <div className="card-front">
                        <div className="card-content">
                            <h3>Question</h3>
                            <p>{currentCard.question}</p>
                        </div>
                        <div className="flip-hint">Click to reveal answer</div>
                    </div>
                    <div className="card-back">
                        <div className="card-content">
                            <h3>Answer</h3>
                            <p>{currentCard.answer}</p>
                        </div>
                        <div className="flip-hint">Click to go back to question</div>
                    </div>
                </div>

                {isFlipped && (
                    <div className="answer-buttons">
                        <button className="correct-btn" onClick={handleCorrect}>
                            ✓ I got it right
                        </button>
                        <button className="incorrect-btn" onClick={handleIncorrect}>
                            ✗ I got it wrong
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default QuizFeature;