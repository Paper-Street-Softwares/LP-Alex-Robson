import lawService1 from "../assets/imgs/services/lawService1.webp";
import lawService2 from "../assets/imgs/services/lawService2.webp";
import lawService3 from "../assets/imgs/services/lawService3.webp";
import lawService4 from "../assets/imgs/services/lawService4.webp";
import lawService5 from "../assets/imgs/services/lawService5.webp";
import lawService6 from "../assets/imgs/services/lawService6.webp";
import lawService7 from "../assets/imgs/services/lawService7.webp";
import lawService8 from "../assets/imgs/services/lawService8.webp";
import lawService9 from "../assets/imgs/services/lawService9.webp";

import content from "./content";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

const services = {
  main: {},
  moreServices: {
    arrowIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-corner-down-right"
      >
        <polyline points="15 10 20 15 15 20" />
        <path d="M4 4v7a4 4 0 0 0 4 4h12" />
      </svg>
    ),
    ctaButtons: {
      buttonLabel: "Agendar consulta gratuita",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-corner-down-right"
        >
          <polyline points="15 10 20 15 15 20" />
          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
        </svg>
      ),
    },
    demaisAreas: {
      label: "Demais áreas",
      service1: {
        name: "Direito de Família e Sucessões",
        img: {
          img: lawService1,
        },
        cardSubtitle: "Sobre o que se trata:",
        cardDescription:
          "Resolução de divórcios, pensões e disputas sucessórias com foco em empatia e eficiência.",
        buttonLink: whatsappContactLink,
      },
      service2: {
        name: "Direito Administrativo",
        img: {
          img: lawService2,
        },
        cardSubtitle: "Sobre o que se trata:",
        cardDescription:
          "Soluções para demandas administrativas e judiciais com atuação completa.",
        buttonLink: whatsappContactLink,
      },
      service3: {
        name: "Propriedade Intelectual",
        img: {
          img: lawService3,
        },
        cardSubtitle: "Sobre o que se trata:",
        cardDescription:
          "Proteção de marcas e contratos para preservar seus direitos.",
        buttonLink: whatsappContactLink,
      },
      service4: {
        name: "Direito Empresarial",
        img: {
          img: lawService4,
        },
        cardSubtitle: "Sobre o que se trata:",
        cardDescription:
          "Suporte jurídico estratégico para empresas de todos os portes.",
        buttonLink: whatsappContactLink,
      },
      service5: {
        name: "Direito Aeroportuário",
        img: {
          img: lawService5,
        },
        cardSubtitle: "Sobre o que se trata:",
        cardDescription:
          "Assistência em casos de voos atrasados, cancelados e bagagens extraviadas.",
        buttonLink: whatsappContactLink,
      },
      service6: {
        name: "Direito Bancário",
        img: {
          img: lawService6,
        },
        cardSubtitle: "Sobre o que se trata:",
        cardDescription:
          "Defesa em busca em apreensão, desbloqueio de contas, golpe do pix, fraudes bancárias, revisão de juros.",
        buttonLink: whatsappContactLink,
      },
      service7: {
        name: "Direito Previdenciário",
        img: {
          img: lawService7,
        },
        cardSubtitle: "Sobre o que se trata:",
        cardDescription:
          "Busca de benefícios para segurados e suporte para empresas.",
        buttonLink: whatsappContactLink,
      },
      service8: {
        name: "Direito à Saúde",
        img: {
          img: lawService8,
        },
        cardSubtitle: "Sobre o que se trata:",
        cardDescription:
          "Defesa dos direitos à saúde contra abusos financeiros e contratuais.",
        buttonLink: whatsappContactLink,
      },
      service9: {
        name: "Defesa do Consumidor",
        img: {
          img: lawService9,
        },
        cardSubtitle: "Sobre o que se trata:",
        cardDescription:
          "Proteção ao consumidor em questões jurídicas e contratuais.",
        buttonLink: whatsappContactLink,
      },
    },
  },
};

export default services;
