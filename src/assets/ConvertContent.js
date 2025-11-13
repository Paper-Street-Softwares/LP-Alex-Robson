import { useTranslation } from "react-i18next";

/**
 * Percorre todo o content.texts e substitui strings pelos textos traduzidos do i18next
 */
export function useTranslatedContent(content) {
  const { t } = useTranslation();

  function translate(obj, path = "") {
    if (typeof obj === "string") {
      // Aqui ele busca a tradução no i18next usando a chave completa
      return t(path, obj);
    } else if (Array.isArray(obj)) {
      return obj.map((item, index) => translate(item, `${path}.${index}`));
    } else if (typeof obj === "object" && obj !== null) {
      const result = {};
      for (const key in obj) {
        const newPath = path ? `${path}.${key}` : key;
        result[key] = translate(obj[key], newPath);
      }
      return result;
    } else {
      return obj; // JSX, imagens, números, funções permanecem iguais
    }
  }

  return translate(content.texts);
}
