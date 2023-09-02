import React, { useEffect, useRef, useState, useCallback, forwardRef, ForwardedRef } from 'react';
import './terminal.css';
import { TerminalProps } from "./types";

export const Terminal = forwardRef((props: TerminalProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    history = [],
    promptLabel = '>',
    commands = {},
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null); // Create a ref for the terminal container
  const [input, setInputValue] = useState<string>('');

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom when history changes
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    []
  );

  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        const commandToExecute = commands?.answer;
        if (commandToExecute) {
          commandToExecute(input);
        }
        setInputValue('');
      }
    },
    [commands, input]
  );

  return (
    <div className="terminal" ref={terminalRef} onClick={focusInput}> {/* Assign the ref */}
      {history.map((line, index) => (
        <div className="terminal__line" key={`terminal-line-${index}-${line}`}>
          {line}
        </div>
      ))}
      <div className="terminal__prompt">
        <div className="terminal__prompt__label">{promptLabel}</div>
        <div className="terminal__prompt__input">
          <input
            type="text"
            value={input}
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            ref={inputRef}
          />
        </div>
      </div>
    </div>
  );
});

