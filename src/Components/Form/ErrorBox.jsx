import { forwardRef } from 'react';

import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';


const mac_shake = keyframes`
  0% { transform: translate(30px); }
  20% { transform: translate(-30px); }
  40% { transform: translate(15px); }
  60% { transform: translate(-15px); }
  80% { transform: translate(8px); }
  100% { transform: translate(0px) };
`;

const Container = styled.p`
  animation: ${mac_shake} 0.6s forwards ease-in-out;
  border-radius: 5px;
  animation-iteration-count: 1;
`;

const ErrorBox = forwardRef(({ errMsg }, ref) => {
  return (
    <Container
      ref={ref}
      style={
        errMsg ? {
          background: '#f00',
          backdropFilter: 'blur(20px)',
          color: '#fff',
          padding: '10px',
          fontWeight: '500',
        } : {
          display: 'none',
        }
      }
      aria-live="assertive"
    >
      {errMsg}
    </Container>
  )
});

ErrorBox.propTypes = {
  errMsg: PropTypes.string
}

export default ErrorBox;
