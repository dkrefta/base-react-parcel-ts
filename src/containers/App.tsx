import React from 'react';
import styled from 'styled-components';

import AppContext from '../services/Context';
import Theme from '../theme';
import I18n from '../I18n';

import Title from '../components/Title';
import LocaleDisplayer from '../components/LocaleDisplayer';

type AppProps = {};
type AppState = {
  locale?: string;
};

const defaultLocale = process.env.APP_LOCALE || 'en';

class App extends React.Component<AppProps, AppState> {
  state = { locale: defaultLocale };

  render() {
    return (
      <AppContext.Provider value={{ theme: Theme, locale: this.state.locale }}>
        <Wrapper>
          <Title>{I18n.l(this.state.locale, 'title')}</Title>
          <LocaleDisplayer />
          <button onClick={() => this.setState({ locale: 'pt' })}>PT</button>
          <button onClick={() => this.setState({ locale: 'en' })}>EN</button>
        </Wrapper>
      </AppContext.Provider>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

export default App;
