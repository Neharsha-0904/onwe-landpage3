import React, { useState } from 'react';
import './EventsTransition.css';

const panelsData = [
  { id: 'panel-1', title: 'Tech', image: '/home/ubuntu/Downloads/Onwe(3)/Onwe/public/img/projections.jpeg' },
  { id: 'panel-2', title: 'EDM', image: '/home/ubuntu/Downloads/Onwe(3)/Onwe/public/img/edm.jpeg' },
  { id: 'panel-3', title: 'NCC', image: '/home/ubuntu/Downloads/Onwe(3)/Onwe/public/img/NCC.jpeg' },
  { id: 'panel-4', title: 'Sports', image: '/home/ubuntu/Downloads/Onwe(3)/Onwe/public/img/sports.jpeg' },
  { id: 'panel-5', title: 'Fest', image: '/home/ubuntu/Downloads/Onwe(3)/Onwe/public/img/fest.jpeg' },
  { id: 'panel-6', title: 'Culture', image: '/home/ubuntu/Downloads/Onwe(3)/Onwe/public/img/culture.jpeg' },
];

const Panel = ({ id, title, image, isActive, onClick }) => {
  return (
    <div
      className={`panel ${isActive ? 'active' : ''}`}
      id={id}
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => onClick(id)}
    >
      <h3>{title}</h3>
    </div>
  );
};

const EventsTransition = () => {
  const [activePanel, setActivePanel] = useState('panel-1');

  const handlePanelClick = (id) => {
    setActivePanel(id);
  };

  return (
    <div className="container">
      {panelsData.map((panel) => (
        <Panel
          key={panel.id}
          id={panel.id}
          title={panel.title}
          image={panel.image}
          isActive={activePanel === panel.id}
          onClick={handlePanelClick}
        />
      ))}
    </div>
  );
};

export default EventsTransition;
