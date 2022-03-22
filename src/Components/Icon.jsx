import useIcon from '../Hooks/useIcon';

import styled from 'styled-components';
import PropTypes from 'prop-types';


const StyledIcon = styled.img`
  max-width: 1.6rem;
  padding: 0.2rem 0.4rem;
`;

const Icon = ({ type, clickable, alt, ...props }) => {

  const iconSrc = useIcon(type);

  return (
    <StyledIcon
      src={iconSrc}
      alt={alt}
      style={clickable ? { cursor: 'pointer' } : {}}
      {...props}
    />
  )
}

Icon.defaultProps = {
  type: '',
  clickable: false,
  alt: '',
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  clickable: PropTypes.bool,
  alt: PropTypes.string,
}

export default Icon;
