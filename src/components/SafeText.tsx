import React from 'react';

interface SafeTextProps {
  text: string;
  className?: string;
}

const SafeText: React.FC<SafeTextProps> = ({ text, className = '' }) => {
  const renderText = () => {
    const parts = text.split('<br>');
    
    return parts.map((part, index) => {
      const strongMatch = part.match(/^(.+?)<strong>(.+?)<\/strong>(.*)$/);
      
      if (strongMatch) {
        const [, before, strongText, after] = strongMatch;
        return (
          <React.Fragment key={index}>
            {before}
            <strong>{strongText}</strong>
            {after}
            {index < parts.length - 1 && <br />}
          </React.Fragment>
        );
      }
      
      return (
        <React.Fragment key={index}>
          {part}
          {index < parts.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return <span className={className}>{renderText()}</span>;
};

export default SafeText;