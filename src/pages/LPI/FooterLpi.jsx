import React, { useState } from "react";
import content from "../../content/content";
import SectionArea from "../../components/sectionElements/SectionArea";
import SectionWrapper from "../../components/sectionElements/SectionWrapper";
import { Dialog } from "primereact/dialog";
import { X } from "lucide-react";

export default function FooterLpi() {
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const onClick = () => {
    setModalTitle("Política de Privacidade");
    // setModalContent();
    setVisible(true);
  };

  return (
    <div>
      <SectionArea paddingTopAndBottom={false} className="bg-white">
        <SectionWrapper>
          <div className="w-full text-black text-center font-mainFont py-[36px] opacity-70 flex flex-col gap-4">
            <p>
              <a
                className="transition hover:underline cursor-pointer"
                onClick={onClick}
              >
                Política de Privacidade
              </a>
              <br />
            </p>
            <p>
              {" "}
              <a
                className="transition hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.paperstreet.com.br"
              >
                {content.texts.footer.copyrightLpi}
              </a>
            </p>
          </div>
        </SectionWrapper>
      </SectionArea>

      {/* MODAL */}
      <Dialog
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "80vw", maxWidth: "900px" }}
        modal
        dismissableMask
      >
        <div className="overflow-y-auto max-h-[70vh] pr-4">
          {" "}
          <div className="text-sm text-gray-800 leading-relaxed font-secondFont">
            {/* <h1 className="text-title1">Política de Privacidade</h1> */}
            <hr className="pb-2" />
            <h2 className="text-title1 font-bold mb-2">
              Informações Importantes
            </h2>
            <p>
              Esta Política de Privacidade descreve como coletamos, utilizamos,
              armazenamos e compartilhamos informações pessoais de usuários de
              nossos serviços, em conformidade com a Lei Geral de Proteção de
              Dados (LGPD) - Lei nº 13.709/2018.
              <br />
              Nos comprometemos a proteger a privacidade e os dados pessoais de
              todos os usuários, garantindo transparência e segurança em todas
              as etapas de tratamento.
            </p>
            <hr className="mt-2 pb-2" />
            <h2 className="text-title1 font-bold mb-2">Definições</h2>
            <p className="flex flex-col gap-4">
              <p>
                {" "}
                <strong>
                  Autoridade Nacional de Proteção de Dados (ANPD):
                </strong>{" "}
                órgão responsável pela fiscalização e aplicação da LGPD.
              </p>
              <p>
                <strong>Base Legal:</strong> fundamento jurídico que autoriza o
                tratamento de dados pessoais (como consentimento, execução de
                contrato, obrigação legal ou legítimo interesse).
              </p>
              <p>
                {" "}
                <strong>Consentimento:</strong> manifestação livre e informada
                do titular que autoriza o tratamento de seus dados pessoais para
                uma finalidade específica.
              </p>
              <p>
                {" "}
                <strong>Dado Pessoal:</strong> qualquer informação que
                identifique ou possa identificar uma pessoa natural (ex.: nome,
                CPF, e-mail, telefone, IP, localização, etc.).
              </p>
              <p>
                {" "}
                <strong>Dado Pessoal Sensível:</strong> dado que revele origem
                racial, convicção religiosa, opinião política, dado referente à
                saúde, vida sexual, dado genético ou biométrico.
              </p>
              <p>
                {" "}
                <strong>Titular:</strong> pessoa natural a quem se referem os
                dados pessoais tratados.
              </p>
              <p>
                {" "}
                <strong>Tratamento:</strong> qualquer operação realizada com
                dados pessoais, como coleta, armazenamento, uso,
                compartilhamento ou exclusão.
              </p>
              <p>
                {" "}
                <strong>Legítimo Interesse:</strong> quando o tratamento é
                necessário para atender a interesses legítimos do controlador,
                sem ferir direitos e liberdades fundamentais do titular.
              </p>
              <p>
                {" "}
                <strong>Segurança:</strong> medidas técnicas e administrativas
                adotadas para proteger os dados de acessos não autorizados,
                vazamentos ou destruição acidental.
              </p>
              <p>
                {" "}
                <strong>Transparência:</strong> direito do titular de receber
                informações claras e acessíveis sobre o uso de seus dados.
              </p>
            </p>
            <hr className="mt-2 pb-2" />
            <h2 className="text-title1 font-bold mb-2">
              Direitos dos Titulares
            </h2>
            <p>
              <span className="font-bold">
                {" "}
                Os titulares de dados pessoais têm direito a:
              </span>
              <br />- Confirmar se seus dados são tratados;
              <br />- Acessar, corrigir, atualizar ou solicitar a exclusão de
              seus dados;
              <br />- Revogar o consentimento a qualquer momento;
              <br />- Solicitar portabilidade ou anonimização dos dados;
              <br />- Opor-se ao tratamento quando considerar irregular.
              <br />
              <br />
              As solicitações podem ser feitas por meio dos canais de contato
              disponibilizados pela empresa.
            </p>
            <hr className="mt-2 pb-2" />
            <h2 className="text-title1 font-bold mb-2">
              Coleta e Uso de Dados Pessoais
            </h2>
            <p>
              <span className="font-bold">
                {" "}
                Podemos coletar dados pessoais por meio de:
              </span>
              <br />- Formulários de contato e cadastro (nome, e-mail, telefone,
              endereço, CPF, entre outros);
              <br />- Navegação no site, incluindo endereço IP, localização
              geográfica, tipo de navegador, sistema operacional e tempo de
              visita;
              <br />- Transações financeiras, quando houver compra de produtos
              ou contratação de serviços;
              <br />- Interações com o suporte ou atendimento, para aprimorar a
              experiência do usuário e a qualidade do serviço.
              <br />
              <br />
              <span className="font-bold">
                Esses dados são utilizados para:
              </span>
              <br />- Operar, manter e melhorar nossos serviços;
              <br />- Personalizar a experiência do usuário;
              <br />- Cumprir obrigações legais e contratuais;
              <br />- Realizar comunicações e campanhas de marketing, mediante
              consentimento;
              <br />- Garantir segurança, prevenção a fraudes e cumprimento de
              exigências legais.
            </p>
            <hr className="mt-2 pb-2" />
            <h2 className="text-title1 font-bold mb-2">
              Cookies e Tecnologias de Rastreamento
            </h2>
            <p>
              Nosso site pode utilizar cookies e tecnologias semelhantes para
              melhorar a navegação e compreender como os usuários interagem com
              o conteúdo.
              <br />O uso de cookies não estritamente necessários dependerá do
              consentimento do usuário, que poderá ser configurado ou revogado a
              qualquer momento em seu navegador.
            </p>
            <hr className="mt-2 pb-2" />
            <h2 className="text-title1 font-bold mb-2">
              Compartilhamento e Transferência de Dados
            </h2>
            <p>
              <span className="font-bold">
                {" "}
                Podemos compartilhar dados pessoais com:
              </span>
              <br />- Parceiros e prestadores de serviço, que auxiliam na
              operação técnica, hospedagem, marketing ou suporte;
              <br />- Autoridades públicas, quando houver obrigação legal;
              <br />- Instituições financeiras, em transações de pagamento.
              <br />
              <br />
              Em caso de transferência internacional de dados, serão adotadas
              medidas para garantir que o tratamento esteja em conformidade com
              a LGPD e com níveis adequados de proteção.
            </p>
            <hr className="mt-2 pb-2" />
            <h2 className="text-title1 font-bold mb-2">
              Armazenamento e Retenção dos Dados
            </h2>
            <p>
              Os dados pessoais são armazenados apenas pelo tempo necessário
              para cumprir as finalidades para as quais foram coletados ou
              conforme exigido por lei.
              <br />
              Após o período de retenção, os dados são eliminados de forma
              segura, respeitando normas técnicas e regulatórias.
            </p>
            <hr className="mt-2 pb-2" />
            <h2 className="text-title1 font-bold mb-2">
              Segurança da Informação
            </h2>
            <p>
              Adotamos medidas técnicas, físicas e administrativas adequadas
              para proteger os dados pessoais contra acesso não autorizado,
              perda, alteração, destruição ou divulgação indevida.
              <br />
              Embora nenhuma medida seja totalmente infalível, buscamos
              constantemente aprimorar nossas práticas de segurança.
            </p>
            <hr className="mt-2 pb-2" />
            <h2 className="text-title1 font-bold mb-2">
              Alterações nesta Política
            </h2>
            <p>
              Esta Política de Privacidade poderá ser atualizada periodicamente,
              conforme alterações legais ou melhorias em nossos processos.
              <br />
              Recomendamos que o usuário revise este documento regularmente para
              manter-se informado sobre como protegemos suas informações.
            </p>
            <hr className="mt-2 pb-2" />
            <h2 className="text-title1 font-bold mb-2">Contato</h2>
            <p>
              Em caso de dúvidas, solicitações ou exercício de direitos
              relacionados a dados pessoais, entre em contato pelo canal de
              comunicação indicado no site.
            </p>
            <hr className="mt-2 pb-2" />
          </div>
        </div>
      </Dialog>
    </div>
  );
}
