import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import { X } from "lucide-react";
import content from "../../content/content";
import SalvarContatoButton from "../interactives/Cartao/SalvarContato";
import CartaoRedeSocial from "../interactives/Cartao/CartaoRedeSocial";
import Button from "../interactives/Button";

function CartaoSocio() {
  const { nome } = useParams(); // pega a rota
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  // Busca o sócio no conteúdo
  const socioKey = Object.keys(content.texts.socios).find((key) => {
    const socioNome = content.texts.socios[key]?.nome;
    return socioNome?.toLowerCase() === nome?.toLowerCase();
  });

  if (!socioKey) return <div>Página não localizada</div>;

  const socio = content.texts.socios[socioKey];
  const url = `${window.location.origin}/${nome.toLowerCase()}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Conteúdo do modal de compartilhamento
  const modalTitle = "Compartilhar";
  const modalContent = (
    <div className="flex flex-col gap-4 font-mainFont">
      <div className="flex flex-wrap gap-3">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 border rounded bg-green-500 text-white"
        >
          WhatsApp
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 border rounded bg-blue-600 text-white"
        >
          Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}`}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 border rounded bg-sky-400 text-white"
        >
          Twitter
        </a>
      </div>

      <p className="text-sm text-gray-600">
        Copie o link e cole em qualquer lugar que você queira compartilhá-lo:
      </p>

      <div className="flex flex-wrap gap-2 items-center">
        <input
          type="text"
          value={url}
          readOnly
          className="flex-1 border rounded p-1"
        />
        <button
          onClick={handleCopy}
          className="px-3 py-1 bg-gray-800 text-white rounded"
        >
          {copied ? "Copiado!" : "Copiar"}
        </button>
      </div>
    </div>
  );

  let textColor = "";
  let textSecondary = "";
  let bgColor = "";
  let borderColor = "";

  const themes = {
    dark: {
      textColor: "text-white",
      textSecondary: "text-white/60",
      bgColor: "bg-bgFixedDark",
      borderColor: "border-gray-700",
    },

    light: {
      textColor: "text-black",
      textSecondary: "",
      bgColor: "bg-bgFixedLight",
      borderColor: "border-gray-300",
    },

    default: {
      textColor: "text-white",
      textSecondary: "text-white/60",
      bgColor: "bg-bgSectionDark",
      borderColor: "border-gray-700",
    },
  };

  return (
    <div className={`${bgColor} min-h-screen`}>
      <div
        className={`w-full tablet1::max-w-[320px] m-auto font-mainFont ${textColor}`}
      >
        {/* Botões principais */}
        <div className="flex justify-center gap-4 p-4 w-full phone3:max-w-[425px] m-auto">
          <SalvarContatoButton socio={socio} />
          <Button
            onClick={() => setVisible(true)}
            className="rounded-[3px] p-1  "
            icon={
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
                class="lucide lucide-share2-icon lucide-share-2"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
              </svg>
            }
            label="Compartilhar"
            size="small"
            noScale={true}
          ></Button>
        </div>

        <div className="px-[24px] pb-[24px]">
          <div className="p-6 bg-quinary rounded-xl w-full phone3:max-w-[425px] m-auto">
            {/* <hr className="border-b-2 border-black/20 m-auto max-w-[313px] mb-4 " /> */}

            {/* Perfis profissionais */}
            <div className={`w-full  rounded-mds`}>
              <div
                className={`w-full flex flex-col tablet1:w-[205px] desktop1:w-[377px] m-auto gap-4 ${textColor}`}
              >
                {/* Empresa */}
                <div className="flex flex-col rounded-md py-[32px]">
                  {/* Logo e descrição */}
                  <div className="w-full">
                    <img
                      src={content.texts.navbar.logo.img}
                      alt={content.texts.navbar.logo.alt}
                      className="rounded-[5px] m-auto mb-6"
                    />
                  </div>
                  <h3 className="text-center font-secondFont font-bold text-paragraph5">
                    {socio.empresa}
                  </h3>
                  <div className="flex flex-col font-medium text-center gap-2 w-full ">
                    <p className="text-paragraph1 text-black font-medium font-secondFont">
                      Conheça a Empresa:
                    </p>
                    <CartaoRedeSocial tipo="empresa" socio={socio} />
                  </div>
                </div>

                {/* Imagem principal */}
                <div className="w-full m-auto">
                  <img src={socio.image} alt="" className="rounded-xl" />
                </div>

                {/* Nome do Sócio */}
                <div className="w-full m-auto text-center leading-5 py-[32px] flex flex-col">
                  <h1 className="text-paragraph5 font-bold font-mainFont">
                    {socio.nome} {socio.sobrenome}
                  </h1>
                  <h3 className="text-center font-secondFont text-paragraph5 mt-2">
                    {socio.função}
                  </h3>
                  <h3 className="text-center font-secondFont font-medium text-paragraph3 mt-2">
                    {socio.oab}
                  </h3>
                </div>

                <hr className="border-b-2 border-black/20 " />

                {/* Função e texto */}
                <div className="flex flex-col w-full">
                  <div className=" w-full m-auto mb-5">
                    <i>
                      <p
                        className={`m-auto text-paragraph3 text-center text-black/70 font-secondFont ${textSecondary}`}
                      >
                        {socio.description}
                      </p>
                    </i>
                  </div>
                  <div className="flex">
                    <CartaoRedeSocial tipo="social" socio={socio} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Informações Pessoais */}
          {/* <div className={`w-full tablet1:w-[425px] m-auto pt-8  ${textColor}`}>
            <div className="bg-quinary p-6 rounded-xl">
              <h1 className=" text-[16px] font-secondFont text-center pb-[16px]">
                Informações Pessoais:
              </h1>
              <div className="flex flex-wrap gap-2 w-full m-auto justify-center">
                <CartaoRedeSocial tipo="contato" socio={socio} />
              </div>
            </div>
          </div> */}
        </div>

        <footer>
          <div
            className={`w-full justify-center items-center flex m-auto text-paragraph2 bg-primary p-4 ${textColor}`}
          >
            Cartão Digital desenvolvido por Paper Street
          </div>
        </footer>

        {/* Modal de compartilhamento */}
        <Dialog
          className="font-secondFont"
          closeIcon={<X size={20} />}
          header={modalTitle}
          visible={visible}
          onHide={() => setVisible(false)}
          style={{ width: "50vw" }}
          breakpoints={{ "4000px": "60vw", "1024px": "70vw", "641px": "85vw" }}
        >
          {modalContent}
        </Dialog>
      </div>
    </div>
  );
}

export default CartaoSocio;
