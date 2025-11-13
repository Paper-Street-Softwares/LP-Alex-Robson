import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { X, MoveRight } from "lucide-react";
import Button from "../../interactives/Button";
import { useTranslation, Trans } from "react-i18next";

export default function AboutModal() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const onClick = () => {
    setModalTitle(t("about.title"));

    setModalContent(
      <div className="text-paragraph3 text-black">
        {/* <p className="mb-[20px]">
          <Trans i18nKey="about.subtitle" />
        </p> */}

        <Trans i18nKey="about.modal" components={{ br: <br /> }} />

        <div className="">
          <p className="mt-[15px] mb-[20px] text-black">
            <Trans i18nKey="about.ctaButtonAriaLabel" />
          </p>
          <Button
            aria-label={t("about.ctaButtonAriaLabel")}
            label={t("about.ctaButtonText")}
            animation={false}
            className="hover:scale-105"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-whatsapp"
                viewBox="0 0 18 18"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            }
          />
        </div>
      </div>
    );

    setVisible(true);
  };

  return (
    <div>
      <Button
        className="mt-[48px] text-labelButtons"
        label={t("about.buttonModalLabelAbout")}
        onClick={onClick}
        removeAnchor={true}
        removeTarget={true}
        animation={true}
        icon={<MoveRight />}
      />

      <Dialog
        className="font-secondFont"
        closeIcon={<X size={20} />}
        header={<span className="text-black">{modalTitle}</span>}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "641px", "1024px": "641px", "641px": "85vw" }}
      >
        {modalContent}
      </Dialog>
    </div>
  );
}
