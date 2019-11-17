import T from "i18n-react";

export const DEFAULT_LANGUAGE = "en";

export function loadI18n(language = DEFAULT_LANGUAGE) {
  T.setTexts(require(`i18n/${language}`), {
    MDFlavor: 1
  });
}
