import 'react-i18next';

import { defaultNS, resources } from 'src/utils/translation';
// add types for translation hook
declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources['en'];
  }
}
