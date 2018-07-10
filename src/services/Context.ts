import React from 'react';

type ContextType = {
  theme?: any;
  locale?: string;
};

const AppContext = React.createContext({} as ContextType);

export default AppContext;
