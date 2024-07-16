import React, { useEffect } from 'react';
import './TextAnime.css';

const WordAnimation = () => {
  useEffect(() => {
    const spans = document.querySelectorAll('.word span');

    spans.forEach((span, idx) => {
      const handleAnimationEnd = (e) => {
        e.target.classList.remove('active');
      };

      span.addEventListener('animationend', handleAnimationEnd);

      // Initial animation
      setTimeout(() => {
        span.classList.add('active');
      }, 750 * (idx + 1));

      // Loop animation
      setInterval(() => {
        span.classList.add('active');
      }, 750 * spans.length * 2);
    });

    return () => {
      spans.forEach((span) => {
        span.removeEventListener('animationend', (e) => {
          e.target.classList.remove('active');
        });
      });
    };
  }, []);

  return (
    <div className="word">
      <span>O</span>
      <span>N</span>
      <span>W</span>
      <span>E</span>
    </div>
  );
};

export default WordAnimation;
