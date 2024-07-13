import React, { useEffect } from 'react';
import './TextAnime.css'
const WordAnimation = () => {
  useEffect(() => {
    const spans = document.querySelectorAll('.word span');

    spans.forEach((span, idx) => {
      span.addEventListener('click', (e) => {
        e.target.classList.add('active');
      });

      span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
      });

      // Initial animation
      setTimeout(() => {
        span.classList.add('active');
      }, 750 * (idx + 1));
    });

    return () => {
      spans.forEach((span) => {
        span.removeEventListener('click', (e) => {
          e.target.classList.add('active');
        });

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