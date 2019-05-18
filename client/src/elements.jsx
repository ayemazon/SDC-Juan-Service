import * as React from 'react';
import styled from 'styled-components';

export const Wrapper = ({ children }) => (
  <div style={{ textAlign: 'center' }}>{children}</div>
);

export const Title = styled.div`
  font-size: 25px;
  font-family: 'Amazon Ember', Arial, sans-serif;
  line-height: 1.3 !important;
`;

export const Description = styled.div`
  font-size: 16px;
  margin-bottom: 18px !important;
  margin-top: 10px !important;
  display: list-item;
  white-space: pre;
`;

const PriceNumber = styled.div`
  font-size: 23px;
  color: #b12704;
  line-height: 1.255;
  box-sizing: border-box;
  display: inline;
`;

export const Price = ({ children }) => (
  <div
    style={{
      fontSize: '17px',
      lineHeight: '19px',
      color: '#555',
      verticalAlign: 'top',
      marginBottom: '8px',
    }}
  >
    Price: <PriceNumber>${children}</PriceNumber>
  </div>
);

const SellerName = styled.div`
  font-size: 17px;
  line-height: 19px;
  text-decoration: none;
  color: #0066c0;
  cursor: pointer;
  display: inline;
`;

export const Seller = ({ children }) => (
  <div style={{ marginBottom: '8px' }}>
    by <SellerName>{children}</SellerName>
  </div>
);

export const Color = styled.div`
  font-size: 22px;
  border: solid;
  border-width: 1px;
  border-color: ${(props) =>
    props.CurrentColor === props.itemColor ? 'yellow' : 'black'};
  min-width: 6%;
  padding: 8px;
  display: inline-block;
  height: 25px;
  margin: auto;
  margin-top: 10px;
  margin-right: 3px;
  cursor: pointer;
  color: ${(props) =>
    props.itemColor !== 'white' && props.itemColor !== 'azure'
      ? `${props.itemColor}`
      : 'grey'};
`;

export const CurrentColor = styled.div`
  font-size: 17px;
  line-height: 19px;
  color: #555;
  vertical-align: top;
`;