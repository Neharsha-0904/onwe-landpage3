import React from 'react';
import './HorizontalScroll.css';

const App = () => {
  return (
    <div className="App">
      <div className="scroll" style={{ '--time': '20s' }}>
        <div>
          <span>Debate Club</span>
          <span>Drama Club</span>
          <span>Photography Club</span>
          <span>Student Government</span>
          <span>Music Society</span>
          <span>Art Club</span>
          <span>Film Club</span>
          <span>Chess Club</span>
          <span>Environmental Club</span>
          <span>Entrepreneurship Club</span>
        </div>
        <div>
          <span>Sports Club</span>
          <span>Book Club</span>
          <span>Robotics Club</span>
          <span>Dance Team</span>
          <span>Fashion Club</span>
          <span>Technology Club</span>
          <span>Language Club</span>
          <span>Volunteer Club</span>
          <span>Science Club</span>
          <span>Writing Club</span>
        </div>
      </div>

      <div className="scroll" style={{ '--time': '30s' }}>
        <div>
          <span>Engineering Society</span>
          <span>Business Club</span>
          <span>Hiking Club</span>
          <span>Cultural Club</span>
          <span>Chess Club</span>
          <span>Debate Team</span>
          <span>Music Ensemble</span>
          <span>Programming Club</span>
          <span>Health and Fitness Club</span>
          <span>Adventure Club</span>
        </div>
        <div>
          <span>Academic Club</span>
          <span>Gaming Club</span>
          <span>Environmental Club</span>
          <span>Student Newspaper</span>
          <span>Math Club</span>
          <span>Robotics Team</span>
          <span>History Society</span>
          <span>Philosophy Club</span>
          <span>Outdoor Club</span>
          <span>Design Club</span>
        </div>
      </div>

      <div className="scroll" style={{ '--time': '25s' }}>
        <div>
          <span>Music Club</span>
          <span>Dance Club</span>
          <span>Art Society</span>
          <span>Theater Club</span>
          <span>Journalism Club</span>
          <span>Film Society</span>
          <span>Model United Nations</span>
          <span>Engineering Club</span>
          <span>Psychology Club</span>
          <span>Student Council</span>
        </div>
        <div>
          <span>Entrepreneurship Society</span>
          <span>Women's Club</span>
          <span>Men's Club</span>
          <span>International Club</span>
          <span>Programming Society</span>
          <span>Language Society</span>
          <span>Science Society</span>
          <span>Economics Club</span>
          <span>Physics Club</span>
          <span>Political Club</span>
        </div>
      </div>

      <div className="scroll" style={{ '--time': '40s' }}>
        <div>
          <span>Photography Society</span>
          <span>Music Ensemble</span>
          <span>Debate Society</span>
          <span>Chess Team</span>
          <span>Writing Society</span>
          <span>Robotics Society</span>
          <span>Entrepreneurship Club</span>
          <span>Environmental Society</span>
          <span>History Club</span>
          <span>Philosophy Society</span>
        </div>
        <div>
          <span>Technology Society</span>
          <span>Sports Society</span>
          <span>Art Club</span>
          <span>Academic Society</span>
          <span>Gaming Society</span>
          <span>Adventure Society</span>
          <span>Health and Fitness Society</span>
          <span>Model UN Club</span>
          <span>Design Society</span>
          <span>Outdoor Society</span>
        </div>
      </div>
    </div>
  );
}

export default App;
