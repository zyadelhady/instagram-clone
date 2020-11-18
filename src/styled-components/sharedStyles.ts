import styled from 'styled-components';

export const BackgroundContainerMain = (el: HTMLElement) => styled.el`
  background-color: ${(props) => props.theme.bg.main};
`;

export const BackgroundContainerSecondry = styled.div`
  background-color: ${(props) => props.theme.bg.secondry};
`;

export const InputMainBg = styled.input`
  /* background-color: ${(props) => props.theme.bg.main}; */
`;
