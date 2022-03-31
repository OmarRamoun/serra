import './Loader.css';
import { useRange } from '../Hooks/useRange';

import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #37394085;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0.9) 90%
    );
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    opacity: 0.9;
  }
`;

const Loader = () => {

  const cols1 = useRange(1, 7);
  const cols2 = useRange(7, 19);
  const cols3 = useRange(19, 38);

  const cols = [cols1, cols2, cols3];
  const rows = useRange(3);

  const bricks = (
    <>
      {rows.map(row => (
        <div key={row} className={`hex-brick h${row + 1}`}></div>
      ))}
    </>
  );

  return (
    <Container>
      <div className="socket">
        <div className="gel center-gel">
          {bricks}
        </div>
        {
          rows.map(row => (
            cols[row].map(col => (
              <div key={row+col} className={`gel c${col} r${row + 1}`}>
                {bricks}
              </div>
            ))
          ))
        }
      </div>
    </Container>
  )
}

export default Loader;
