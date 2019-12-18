import styled from "styled-components";

const Progress = styled.div`
  position: fixed;
  background: linear-gradient(
    to ${props => props.rtl},
    #69b969 ${props => props.value},
    transparent 0
  );
  width: 100%;
  height: 0.3em;
  z-index: 1;
  opacity: 0.9;
  transition: all 750ms;
`;
export default Progress;
