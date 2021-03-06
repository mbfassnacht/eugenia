import es_UY from "./translations/es_UY.json";
import en_UK from "./translations/en_UK.json";
import pr_BR from "./translations/pr_BR.json";

export function translate(language, translationKey) {
  if (language === "en_UK") {
    return en_UK[translationKey];
  }
  if (language === "pr_BR") {
    return pr_BR[translationKey];
  }

  return es_UY[translationKey];
}
