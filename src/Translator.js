import es_UY from "./translations/es_UY.json";
import en_UK from "./translations/en_UK.json";

export function translate(language, translationKey) {
  if (language === "en_UK") {
    return en_UK[translationKey];
  }

  return es_UY[translationKey];
}
