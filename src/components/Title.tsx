import React from 'react';
import styled from 'styled-components';

import AppContext from '../services/Context';

const Title = styled.h1`
  color: ${props => props.theme.primary};
  text-transform: uppercase;
  text-align: center;
  width: 100%;
`;

export default ({ children }: { children: React.ReactNode }) => (
  <AppContext.Consumer>
    {({ theme }) => <Title theme={theme}>{children}</Title>}
  </AppContext.Consumer>
);
