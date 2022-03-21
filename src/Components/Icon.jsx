import useIcon from '../Hooks/useIcon';
import styled from 'styled-components';


const StyledIcon = styled.img`
  max-width: 1.6rem;
  padding: 0.2rem 0.4rem;
`;

const Icon = ({ type, ...props }) => {

  const icon = useIcon(type);

  return (
    <StyledIcon src={icon} alt="" />
  )
}
export default Icon;
