import React from 'react';
import styled from 'styled-components';

// Define a styled component for the footer
const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Expense Tracker App</p>
    </FooterContainer>
  );
};

export default Footer;
