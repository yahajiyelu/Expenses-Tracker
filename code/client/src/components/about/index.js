import React from 'react';
import styled from 'styled-components';

// Define a styled component for the About section
const AboutSection = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
  text-align: center;
`;

const About = () => {
  return (
    <AboutSection>
      <h2>About Expense Tracker</h2>
      <p>
        Expense Tracker is a simple and user-friendly application designed to help you manage your expenses.
        It allows you to track your income and expenses, set budgets, and gain insights into your spending habits.
      </p>
      <p>
        Developed with ❤️ by Me.
      </p>
    </AboutSection>
  );
};

export default About;
