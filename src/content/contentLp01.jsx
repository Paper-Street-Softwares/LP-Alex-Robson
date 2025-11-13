import bgImg from "../assets/imgs/hero/bgHeroInfluencer.webp";
import logo from "../assets/imgs/logo/logo.webp";
import imagemAbout from "../assets/imgs/about/aboutImg.webp";
import {
  BriefcaseBusiness,
  ShieldAlert,
  Hospital,
  Lock,
  Search,
  Briefcase,
} from "lucide-react";
import { infos } from "./content";
import { Handshake } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import { Gavel } from "lucide-react";

// import img1 from "../assets/imgs/about/image1.webp";
// import img2 from "../assets/imgs/about/image2.webp";
// import img3 from "../assets/imgs/about/image3.webp";

const currentYear = new Date().getFullYear();

const contentLp01 = {
  infos: {
    title: "Advogado Previdenciário em Joinville - Testoni & Advogados",
    description:
      "Especialistas em direito trabalhista e previdenciário em Joinville. Testoni & Advogados oferece atendimento humanizado e defesa de seus direitos.",
    keywords:
      "aposentadoria por invalidez,aposentadoria especial, aposentadoria por tempo de contribuição, aposentadoria por idade,peculio, auxilio doença, auxilio acidente, advogado previdenciário, advogado aposentadoria inss, advogado auxilio doença, advogado especialista em inss, advogado auxílio acidente, advogado especialista aposentadoria, advogado especialista em pensão por morte, advogado previdenciário Joinville, advogado INSS Joinville, auxílio doença negado, auxílio acidente negado, aposentadoria negada, revisão de aposentadoria, pensão por morte, aposentadoria rural, benefício negado inss.",
  },
  hero: {
    bgImg: bgImg,
    logo: {
      logoImg: logo,
      alt: "Logomarca",
    },
    textArea: {
      title: (
        <h1>
          Quer <span className="text-lpTitle text-primary"> garantir</span> sua{" "}
          <span className="text-lpTitle text-primary"> aposentadoria</span> no
          INSS sem erros?
        </h1>
      ),
      subtitle:
        "Nossos advogados previdenciários em Joinville atuam para que você receba todos os seus direitos — mesmo que o INSS tenha negado seu benefício.",
      buttonLabel: "Falar com um Advogado agora",
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
    },
  },
  features: {
    sectionHeader: {
      miniTag: "PEDIDO NEGADO OU DEMORANDO?",
      title:
        "Lutamos para garantir o seu benefício do INSS — rápido e sem complicações.",
    },
    cards: {
      card1: {
        icon: <BriefcaseBusiness />,
        title: "Aposentadorias (por idade, invalidez e tempo de contribuição)",
        description:
          "Garantimos que você receba sua aposentadoria corretamente, mesmo que o INSS tenha negado ou atrasado seu pedido.",
      },
      card2: {
        icon: <ShieldAlert />,

        title: "Auxílio-Doença e Auxílio-Acidente",
        description:
          "Foi afastado do trabalho e o INSS negou seu benefício? Nosso time atua para reverter a decisão e liberar seus pagamentos.",
      },
      card3: {
        icon: <Hospital />,
        title: "Pensão por Morte",
        description:
          "Protegemos o direito financeiro de quem perdeu um ente querido, assegurando que a pensão seja concedida ou revisada corretamente.",
      },
      card4: {
        icon: <Lock />,
        title: "Revisões e Benefícios Negados",
        description:
          "Seu pedido foi negado ou o valor está errado? Revisamos cálculos e processos para garantir que você receba tudo o que tem direito.",
      },
      card5: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-file-warning-icon lucide-file-warning"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
        ),
        title: "A_Definir",
        description: "A_Definir",
      },
    },
  },
  transformation: {
    sectionHeader: {
      miniTag: "Aprovação Sem Stress",
      title: "De dúvidas e negativas à conquista do seu direito",
    },
    paragraphs: {
      descriptionAfter: (
        <p className="flex flex-col gap-3">
          ❌ Você não entende por onde começar o pedido do benefício
          <span>
            ❌ Vive recebendo respostas negativas e sem explicação clara
          </span>
          <span>❌ Envia documentos incompletos e perde tempo com erros</span>
          <span>
            ❌ Carrega a insegurança de não saber se vai conseguir o que é seu
            por direito
          </span>
        </p>
      ),
      descriptionBefore: (
        <p className="flex flex-col gap-3">
          ✅ Eu analiso seu caso e traço a melhor estratégia pra conquistar o
          benefício
          <span>✅ Você entende cada passo e tem acompanhamento de perto</span>
          <span>✅ Seus documentos ficam corretos e prontos pra análise</span>
          <span>
            ✅ Você tem tranquilidade sabendo que seu direito está sendo
            defendido com seriedade
          </span>
        </p>
      ),
    },
    labelCtaTransformation: "Quero meu benefício agora",
  },
  about: {
    bgImg: bgImg,
    imagesGaleria: {
      // imagem1: img1,
      // imagem2: img2,
      // imagem3: img3,
    },
    imgAbout: {
      img: imagemAbout,
    },
    logo: {
      logoImg: logo,
      alt: "logomarca",
    },
    sectionHeader: {
      miniTag: "EXCELÊNCIA EM DIREITO PREVIDENCIÁRIO",
      title: "Na Testoni, seu direito é prioridade",
    },
    paragraph: (
      <p>
        Fundado em 2014, a{" "}
        <strong>Testoni Advocacia Previdenciária e Trabalhista</strong> nasceu
        com o propósito de oferecer uma advocacia moderna, acessível e
        humanizada, voltada à defesa dos direitos dos trabalhadores e segurados
        do INSS.
        <br />
        <br />
        Desde o início, o escritório se consolidou pela combinação entre
        experiência técnica, atendimento próximo e linguagem clara, tornando o
        processo jurídico mais compreensível e eficiente para o cliente.
      </p>
    ),
    buttonLabel: "Fale agora com especialista",
    ctaButtonAriaLabel: "Botão de Contato",
  },
  steps: {
    miniTag: "A_Definir",
    title: "A_Definir",
    subtitle: "A_Definir",
    alt: "A_Definir",
    cards: {
      card1: {
        stepNumber: 1,
        cardTitle: "A_Definir",
        cardDescription: "A_Definir",
      },
      card2: {
        stepNumber: 2,
        cardTitle: "A_Definir",
        cardDescription: "A_Definir",
      },
      card3: {
        stepNumber: 3,
        cardTitle: "A_Definir",
        cardDescription: "A_Definir",
      },
      buttonLabel: "A_Definir",
      ariaLabel: "A_Definir",
    },
  },
  whyUs: {
    sectionHeader: {
      miniTag: "ATENDIMENTO PERSONALIZADO E RESULTADOS REAIS",
      title: "Por que escolher a Testoni para defender seus direitos",
    },
    cards: {
      card1: {
        icon: <Gavel width={32} height={32} />,
        title: "Atendimento direto com advogados experientes",
        description: "Cada cliente é atendido pessoalmente por um advogado.",
      },
      card2: {
        icon: <Search width={32} height={32} />,
        title: "Análise minuciosa de cada situação",
        description: "Cada caso é estudado com atenção e estratégia precisa.",
      },
      card3: {
        icon: <Handshake width={32} height={32} />,
        title: "Transparência em cada etapa",
        description: "Informamos prazos, custos e possibilidades com clareza.",
      },
      card4: {
        icon: <Handshake width={32} height={32} />,
        title: "Comprometimento com resultados",
        description: "Buscamos o melhor resultado com ética e dedicação.",
      },
    },
  },
  video: {
    sectionHeader: {
      miniTag: "A_Definir",
      title: "A_Definir",
      subtitle: "A_Definir",
    },
  },
  cta: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "VOCÊ NÃO PRECISA ENFRENTAR ISSO SOZINHO",
      title: "Na Testoni Advocacia, fazemos seus direitos valerem",
      subtitle: (
        <p className="opacity-80">
          Trabalhista ou previdenciário, nosso papel é garantir que você tenha o
          amparo e a segurança que a lei assegura.
        </p>
      ),
    },
    buttonLabel: "Fale com um advogado agora",
    ctaButtonAriaLabel: "Botão de Contato",
  },
  contact: {
    card1: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      title: "Instagram",
      description: `@${infos.instagramProfile}`,
    },
    card2: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-mail"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      title: "Email",
      description: `${infos.email}@${infos.emailSecundario}`,
    },
    card3: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      ),
      title: "Whatsapp",
      description: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
    },
    card4: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-phone-icon lucide-phone"
        >
          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
        </svg>
      ),
      title: "Fixo",
      description: `(${infos.phoneSecundario.ddd}) ${infos.phoneSecundario.firstPart}-${infos.phoneSecundario.secondPart}`,
    },
  },
  footer: {
    copyrightLine: `© ${currentYear} ${infos.name}. Todos os direitos reservados.`,
    disclaimer: `Este site não é um produto Meta Platforms, Inc., Google LLC, tampouco oferece serviços públicos oficiais. ${infos.name} oferece serviços jurídicos privativos de advogado, de acordo com a legislação vigente e o Código de Ética e Disciplina da Ordem dos Advogados do Brasil.`,
  },
  links: {
    instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
    ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
  },
};

export default contentLp01;
