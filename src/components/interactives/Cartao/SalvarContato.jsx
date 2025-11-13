import React from "react";
import Button from "../../interactives/Button";

export default function SalvarContatoButton({ socio }) {
  const handleSalvarContato = () => {
    if (!socio) return;

    const vcardLines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `N:${socio.sobrenome || ""};${socio.nome || ""}`,
      `FN:${socio.nome || ""} ${socio.sobrenome || ""}`,
    ];

    if (socio.telefone) vcardLines.push(`TEL;TYPE=CELL:${socio.telefone}`);
    if (socio.whatsapp)
      vcardLines.push(`TEL;TYPE=WORK,WhatsApp:${socio.whatsapp}`);
    if (socio.email) vcardLines.push(`EMAIL:${socio.email}`);

    vcardLines.push("END:VCARD");

    const vcard = vcardLines.join("\n");
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${socio.nome || "contato"}.vcf`;

    // Append to body e clique
    document.body.appendChild(a);
    a.click();

    // Remover e revogar URL
    setTimeout(() => {
      URL.revokeObjectURL(url);
      a.remove();
    }, 1000);
  };

  return (
    <Button
      className=" rounded-[3px] p-1 "
      onClick={handleSalvarContato}
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
          class="lucide lucide-download-icon lucide-download"
        >
          <path d="M12 15V3" />
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <path d="m7 10 5 5 5-5" />
        </svg>
      }
      label=" Salvar"
      size="small"
      noScale={true}
    ></Button>
  );
}
