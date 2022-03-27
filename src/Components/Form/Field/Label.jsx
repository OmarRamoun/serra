import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledLabel = styled.label`
  /* hiding the label from the view */
  /* labels are meant only for screen readers */
  position: fixed;
  left: -9999px;
`;

const Label = ({ title, id }) => {
  return (
    <StyledLabel htmlFor={id} >
      {title}
    </StyledLabel>
  )
};

Label.proptTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Label;
