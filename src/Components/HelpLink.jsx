import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
  a {
    margin-left: 0.5rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: #f1ff26;
      text-shadow: 0 6px 8px #f1ff26;
    }
  }
`;

const HelpLink = ({ text, linkText, link }) => {
  return (
    <Container>
      {text}
      {linkText &&
        <Link to={link} >
          {linkText}
        </Link>
      }
    </Container>
  )
}

HelpLink.defaultProps = {
  linkText: "",
  link: "",
}

HelpLink.propTypes = {
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  link: PropTypes.string
}

export default HelpLink;
