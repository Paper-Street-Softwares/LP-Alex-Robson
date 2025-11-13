import content from "../../content/content";

export const USE_REAL_WHATSAPP_LINK = true;

export const WHATSAPP_DIRECT_LINK = content.texts.links.ctaWhatsapp;
export const WHATSAPP_LOCAL_ROUTE = "/whatsapp";

export const getWhatsappLink = () =>
  USE_REAL_WHATSAPP_LINK ? WHATSAPP_DIRECT_LINK : WHATSAPP_LOCAL_ROUTE;
