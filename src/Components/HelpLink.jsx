import { FlexColumn } from '../Styles/Flex.styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';


const Container = styled.div`
  text-align: center;
  ${({ split }) => split && css`
    ${FlexColumn};
    justify-content: center;
  `}
  a {
    margin-left: ${({ split }) => split ? 0 : css`0.5rem`};
    text-decoration: none;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    transition: all 0.2s;
    ${({ split }) => split && css`
      align-self: center;
    `}

    &:hover {
      color: #f1ff26;
      text-shadow: 0 6px 8px #f1ff26;
    }
  }
`;

const HelpLink = ({ split, text, linkText, link }) => {
  return (
    <Container split={split}>
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
  split: false,
  linkText: "",
  link: "",
}

HelpLink.propTypes = {
  split: PropTypes.bool,
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  link: PropTypes.string
}

export default HelpLink;
