import React, { useState } from 'react';
import classNames from 'classnames';
import { CButton } from '@coreui/react';

const styles = {
  cardToggle: {},
  cardToggleActive: {
    backgroundColor: 'blue',
    color: '#fff',
    fontWeight: 'bold',
  },
  actionButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  actionButton: {
    marginRight: '5px', // Add margin to the right side of the button
  },
};

const Card = ({ children, header, isActive }) => {
  return (
    <div
      className={classNames('card', { active: isActive })}
      style={{ display: isActive ? 'block' : 'none' }}
    >
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
    </div>
  );
};

const Requests = () => {
  const [activeCard, setActiveCard] = useState('card1');

  const handleCardClick = (cardName) => {
    setActiveCard(cardName);
  };

  const trafficData = [
    ["SI NO", "Skill Set", "No of Employees", "Project Name", "Start Date", "End Date", "Priority", "Action"],
    ["1", "Example 1", "2", "Example Project 1", "2024-04-08", "2024-05-07", "High"],
    ["2", "Example 2", "4", "Example Project 2", "2024-04-09", "2024-05-08", "Medium"],
    ["3", "Example 3", "6", "Example Project 3", "2024-04-10", "2024-05-09", "Low"],
  ];

  const salesData = [
    ["Resources", "Resources Name", "Project Name", "Start Date", "Extend Date", "Action"],
    ["10", "5", "2", "2024-04-08", "2024-05-07"],
    ["15", "10", "4", "2024-04-09", "2024-05-08"],
    ["20", "15", "6", "2024-04-10", "2024-05-09"],
  ];

  return (
    <div className="dash-container">
      <div
        className="card-toggle-container"
        style={{ display: 'flex', justifyContent: 'left', marginBottom: '20px' }}
      >
        <CButton
          className={classNames(styles.cardToggle, { [styles.cardToggleActive]: activeCard === 'card1' })}
          onClick={() => handleCardClick('card1')}
          style={{ marginRight: '10px', borderRadius: '6px', backgroundColor: '#008CBA', color: 'white' }}
        >
          Requests for Resources
        </CButton>
        <CButton
          className={classNames('card-toggle', { active: activeCard === 'card2' })}
          onClick={() => handleCardClick('card2')}
          style={{ marginLeft: '10px', borderRadius: '6px', backgroundColor: '#008CBA', color: 'white' }}
        >
          Requests for Extension
        </CButton>
      </div>

      <Card isActive={activeCard === 'card1'} header="Requests for Resources">
        <table className="table">
          <thead>
            <tr>
              {trafficData[0].map((name, index) => (
                <th key={index} style={{ textAlign: 'center' }}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {trafficData.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} style={{ textAlign: 'center' }}>{cell}</td>
                ))}
                <td style={{ textAlign: 'center' }}>
                  <div style={styles.actionButtonContainer}>
                    <CButton color="primary" style={styles.actionButton}>Allocate</CButton>
                    <CButton color="primary">Reject</CButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card isActive={activeCard === 'card2'} header="Requests for Extension">
        <table className="table">
          <thead>
            <tr>
              {salesData[0].map((name, index) => (
                <th key={index} style={{ textAlign: 'center' }}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {salesData.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} style={{ textAlign: 'center' }}>{cell}</td>
                ))}
                <td style={{ textAlign: 'center' }}>
                  <div style={styles.actionButtonContainer}>
                    <CButton color="primary" style={styles.actionButton}>Extend</CButton>
                    <CButton color="primary">Reject</CButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Requests;
