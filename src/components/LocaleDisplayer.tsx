import React from 'react';
import styled from 'styled-components';

import AppContext from '../services/Context';

const LocaleDisplayer = styled.h1`
  color: red;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
`;

export default () => (
  <AppContext.Consumer>
    {({ locale }) => <LocaleDisplayer>current locale: {locale}</LocaleDisplayer>}
  </AppContext.Consumer>
);
