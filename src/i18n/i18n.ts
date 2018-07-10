import _ from 'lodash';
import en from './en';
import pt from './pt';

class I18n {
  static l = (lang: string, alias: string, params?: string) => {
    let currentLocale = {};
    switch (lang) {
      case 'en':
        currentLocale = { ...en };
        break;
      case 'pt':
        currentLocale = { ...pt };
        break;
      default:
        break;
    }

    const translation = _.get(currentLocale, alias);
    if (params) {
      // TODO: pass params to the translation
    } else {
      return translation;
    }
  };
}

export default I18n;
