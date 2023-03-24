import HelpLink from '../../HelpLink';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-shadow: rgb(12 11 19) 2px 2px 4px;

  ${({ theme }) => theme.media.tablet} {
    gap: 0.9rem;
    input {
      flex: 0 0 1.7rem;
      padding: 1rem;
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

const Checkbox = ({ id, text, linkText, link, ...props }) => {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        id={id}
        name={id}
        {...props}
      />
      <label htmlFor={id}>
        <HelpLink
          text={text}
          linkText={linkText}
          link={link}
        />
      </label>
    </StyledCheckbox>
  )
}

Checkbox.defaultProps = {
  linkText: "",
  link: "",
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  link: PropTypes.string
}

export default Checkbox;
