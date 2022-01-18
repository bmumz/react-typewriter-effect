import React, {FC, useCallback, useEffect, useState} from 'react';

interface TypewriterEffectProps {
    statements: string[];
    backspacingSpeed?: number;
    typingSpeed?: number;
}

const TypewriterEffect: FC<TypewriterEffectProps> = ({
    statements,
    backspacingSpeed,
    typingSpeed
}) => {
    const [statementIndex, setStatementIndex] = useState<number>(0);
    const [letterIndex, setLetterIndex] = useState<number>(0);
    const [cursor, setCursor] = useState<boolean>(true);
    const [isBackspacing, setIsBackspacing] = useState<boolean>(false);
    const backspaceSpeed = backspacingSpeed ? backspacingSpeed : 200;
    const typeSpeed = typingSpeed ? typingSpeed : 250;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCursor((prevState: boolean) => !prevState);
        }, 500);
        return () => clearTimeout(timeout);
    }, [cursor]);

    const handleTypewriter = useCallback(() => {
        if (
            statementIndex === statements.length - 1 &&
            letterIndex === statements[statementIndex].length
        ) {
            setIsBackspacing(true);
            return;
        }
        if (!statements[statementIndex]) {
            setStatementIndex(0);
        }
        if (
            statements[statementIndex]
                ? letterIndex === statements[statementIndex].length + 1
                : 0 &&
                  statementIndex !== statements.length - 1 &&
                  !isBackspacing
        ) {
            setIsBackspacing(true);
        }
        if (letterIndex === 0 && isBackspacing) {
            setIsBackspacing(false);
            setStatementIndex(prev => prev + 1);
        }

        const timeout = setTimeout(
            () => {
                setLetterIndex(
                    prevState => prevState + (isBackspacing ? -1 : 1)
                );
            },
            isBackspacing ? backspaceSpeed : typeSpeed
        );

        return () => clearTimeout(timeout);
    }, [letterIndex, statementIndex, isBackspacing]);

    useEffect(() => {
        handleTypewriter();
    }, [letterIndex, statementIndex, isBackspacing]);

    return (
        <>
            <h1>
                {statements[statementIndex] &&
                    statements[statementIndex].substring(0, letterIndex)}{' '}
                <span style={{fontSize: '2rem'}}>{cursor ? '|' : ''}</span>
            </h1>
        </>
    );
};

export default TypewriterEffect;
