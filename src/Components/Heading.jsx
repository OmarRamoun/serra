import styled from 'styled-components';


const StyledHeading = styled.h1`
  font-family: 'Nova Flat', cursive, sans-serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Heading = ({ children }) => {
  return (
    <StyledHeading>
      {children.toUpperCase()}
    </StyledHeading>
  )
}

export default Heading;
