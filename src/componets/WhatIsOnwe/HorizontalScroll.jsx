import React from "react";
import "./HorizontalScroll.css";

const colors = [
  "bg-color-1",
  "bg-color-2",
  "bg-color-3",
  "bg-color-4",
  "bg-color-5",
  "bg-color-6",
  "bg-color-7",
  "bg-color-8",
  "bg-color-9",
  "bg-color-10",
];

const InfiniteScrollComponent = () => {
  const renderSpans = (items) => {
    return items.map((item, index) => (
      <span key={index} className={colors[index % colors.length]}>
        {item}
      </span>
    ));
  };

  return (
    <div className="App">
      <div className="scroll" style={{ "--time": "40s" }}>
        <div>
          {renderSpans([
            "Debate Club",
            "Drama Club",
            "Photography Club",
            "Student Government",
            "Music Society",
            "Art Club",
            "Film Club",
            "Chess Club",
            "Environmental Club",
            "Entrepreneurship Club",
          ])}
        </div>
        <div>
          {renderSpans([
            "Sports Club",
            "Book Club",
            "Robotics Club",
            "Dance Team",
            "Fashion Club",
            "Technology Club",
            "Language Club",
            "Volunteer Club",
            "Science Club",
            "Writing Club",
          ])}
        </div>
      </div>

      <div className="scroll" style={{ "--time": "30s" }}>
        <div>
          {renderSpans([
            "Engineering Society",
            "Business Club",
            "Hiking Club",
            "Cultural Club",
            "Chess Club",
            "Debate Team",
            "Music Ensemble",
            "Programming Club",
            "Health and Fitness Club",
            "Adventure Club",
          ])}
        </div>
        <div>
          {renderSpans([
            "Academic Club",
            "Gaming Club",
            "Environmental Club",
            "Student Newspaper",
            "Math Club",
            "Robotics Team",
            "History Society",
            "Philosophy Club",
            "Outdoor Club",
            "Design Club",
          ])}
        </div>
      </div>

      <div className="scroll" style={{ "--time": "40s" }}>
        <div>
          {renderSpans([
            "Music Club",
            "Dance Club",
            "Art Society",
            "Theater Club",
            "Journalism Club",
            "Film Society",
            "Model United Nations",
            "Engineering Club",
            "Psychology Club",
            "Student Council",
          ])}
        </div>
        <div>
          {renderSpans([
            "Entrepreneurship Society",
            "Women's Club",
            "Men's Club",
            "International Club",
            "Programming Society",
            "Language Society",
            "Science Society",
            "Economics Club",
            "Physics Club",
            "Political Club",
          ])}
        </div>
      </div>

      {/* <div className="scroll" style={{ '--time': '40s' }}>
        <div>{renderSpans([
          'Photography Society', 'Music Ensemble', 'Debate Society', 
          'Chess Team', 'Writing Society', 'Robotics Society', 
          'Entrepreneurship Club', 'Environmental Society', 'History Club', 
          'Philosophy Society'
        ])}</div>
        <div>{renderSpans([
          'Technology Society', 'Sports Society', 'Art Club', 
          'Academic Society', 'Gaming Society', 'Adventure Society', 
          'Health and Fitness Society', 'Model UN Club', 'Design Society', 
          'Outdoor Society'
        ])}</div>
      </div> */}
    </div>
  );
};

export default InfiniteScrollComponent;
