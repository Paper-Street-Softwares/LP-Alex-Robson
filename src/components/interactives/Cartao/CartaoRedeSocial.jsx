import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import IconButtonCartao from "../IconButtonCartao";
import content from "../../../content/content";
import { useParams } from "react-router-dom";
import { infos } from "../../../content/content";

const icons = {
  whatsapp: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="white"
      viewBox="0 0 24 24"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
    </svg>
  ),
  telefone: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2a9 9 0 0 1 9 9" />
      <path d="M13 6a5 5 0 0 1 5 5" />
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  ),
  site: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-globe-icon lucide-globe"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  ),
  instagram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="transparent"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  facebook: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="transparent"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  tiktok: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 30 30"
      fill="black"
    >
      <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 21.573 19.5" width="16" height="16" fill="black">
      <path d="m 16.998462,0 h 3.308 l -7.227,8.26 8.502,11.24 h -6.657 l -5.2139994,-6.817 -5.966,6.817 H 0.43446256 L 8.1644626,10.665 0.00846256,0 H 6.8344626 l 4.7129994,6.231 z m -1.161,17.52 h 1.833 L 5.8384626,1.876 h -1.967 z" />
    </svg>
  ),
  linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-linkedin"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  github: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-globe-icon lucide-globe"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  ),
  githubSocial: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-github-icon lucide-github"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  whatsappSocial: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="white"
      viewBox="0 0 24 24"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
    </svg>
  ),
  email: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-mail-icon lucide-mail"
    >
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  ),
  emailSocial: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-mail-icon lucide-mail"
    >
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  ),
};

function CartaoRedeSocial({ tipo = "contato", socio }) {
  if (!socio) return null;

  const contatoLinks = {
    github: socio.github || null,
    whatsapp: socio.whatsapp || null,
    telefone: socio.telefone || null,
    site: socio.site || null,
    email: socio.email || null,
  };

  const redesLinks = {
    instagram: socio.social?.instagram || null,
    facebook: socio.social?.facebook || null,
    tiktok: socio.social?.tiktok || null,
    x: socio.social?.x || null,
    linkedin: socio.social?.linkedin || null,
    githubSocial: socio.social?.githubSocial || null,
    whatsappSocial: socio.social?.whatsappSocial || null,
    emailSocial: socio.social?.emailSocial || null,
  };

  const empresaLinks = {
    site: socio.empresaSocial?.site || null,
    instagram:
      infos.instagramProfile && infos.instagramProfile !== "A_Definir"
        ? infos.instagramProfile
        : null,
    facebook:
      infos.facebookProfile && infos.facebookProfile !== "A_Definir"
        ? infos.facebookProfile
        : null,
    linkedin:
      infos.linkeDinProfile && infos.linkeDinProfile !== "A_Definir"
        ? infos.linkeDinProfile
        : null,
    whatsappSocial: socio.social?.whatsappSocial || null,
    emailSocial: socio.social?.emailSocial || null,
    x: infos.x && infos.x !== "A_Definir" ? infos.x : null,
    tiktok:
      infos.tiktokProfile && infos.tiktokProfile !== "A_Definir"
        ? infos.tiktokProfile
        : null,
  };

  // filtra apenas os que realmente têm valor
  const filteredData = Object.fromEntries(
    Object.entries(empresaLinks).filter(
      ([_, value]) => value && value.trim() !== ""
    )
  );

  const labels = {
    github: "GitHub",
    whatsapp: content.texts.infos.phone,
    telefone: "Telefone",
    site: "Site",
    email: content.texts.infos.email,
    instagram: "Instagram",
    facebook: "Facebook",
    tiktok: "TikTok",
    x: "X",
    linkedin: "LinkedIn",
    githubSocial: "GitHub",
    whatsappSocial: content.texts.infos.phone,
    emailSocial: content.texts.socios.socio1.social.emailSocial,
  };

  const links =
    tipo === "contato"
      ? contatoLinks
      : tipo === "social"
      ? redesLinks
      : tipo === "empresa"
      ? filteredData
      : contatoLinks;

  const linksToRender = Object.entries(links).filter(
    ([_, value]) => value && value.trim() !== ""
  );

  function formatLabel(key, value) {
    if (!value) return "";

    switch (key) {
      case "whatsapp":
      case "whatsappSocial":
      case "telefone": {
        // Pega só números
        const digits = value.replace(/\D/g, "");
        // Formata se tiver 11 dígitos (Brasil)
        if (digits.length === 11) {
          return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(
            7
          )}`;
        }
        return value;
      }
      case "email":
      case "emailSocial":
        return value.toLowerCase();
      case "instagram":
        return value.startsWith("@") ? value : `@${value}`;
      case "site":
      case "github":
      case "githubSocial":
      case "linkedin":
      case "facebook":
        return value.replace(/^https?:\/\//, "").replace(/\/$/, "");
      default:
        return value;
    }
  }

  return (
    <div
      className={`flex gap-2 justify-center w-full ${
        tipo === "empresa" ? "flex-wrap m-auto" : "flex-wrap"
      }`}
    >
      {linksToRender.map(([key, value]) => {
        let link = value;
        switch (key) {
          case "instagram":
            link = `https://instagram.com/${value.replace("@", "")}`;
            break;
          case "whatsapp":
            link = `https://wa.me/${value.replace(/\D/g, "")}`;
            break;
          case "telefone":
            link = `tel:${value}`;
            break;
          case "facebook":
            link = `https://www.facebook.com/${value}`;
            break;
          case "linkedin":
            if (value.startsWith("http")) {
              // se já for link completo (empresa, perfil ou outro)
              link = value;
            } else {
              // se for apenas o username, monta o /in/
              link = `https://www.linkedin.com/in/${value}`;
            }
            break;
          case "whatsappSocial":
            link = `https://wa.me/${value.replace(/\D/g, "")}`;
            break;
          case "github":
            link = `https://${value}`;
            break;
          case "githubSocial":
            link = `https://${value}`;
            break;
          case "email":
            link = `mailto:${value}`;
            break;
          case "emailSocial":
            link = `mailto:${value}`;
            break;
        }

        const svg = icons[key];
        if (!svg) return null;

        return (
          <MotionDivDownToUp key={key}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link para ${labels[key] || key}`}
            >
              <IconButtonCartao
                label={tipo === "empresa" ? "" : labels[key]}
                ariaLabel={`Botão para ${labels[key]}`}
                icon={svg}
                width={tipo === "empresa" ? "w-auto" : "min-w-[200px] m-auto"}
              />
            </a>
          </MotionDivDownToUp>
        );
      })}
    </div>
  );
}

export default CartaoRedeSocial;
