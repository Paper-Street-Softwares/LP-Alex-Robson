import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import { X } from "lucide-react";

export default function ModalComponent({ children, header, content }) {
  const [visible, setVisible] = useState(false);

  const openModal = () => setVisible(true);
  const closeMOdal = () => setVisible(false);

  const childWithProps = React.cloneElement(children, {
    onClick: openModal,
  });

  return (
    <div>
      {childWithProps}
      <Dialog
        className=" font-secondFont"
        closeIcon={<X size={20} />}
        header={header}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "300px", "1024px": "300px",  "641px": "300px" }}
      >
        {content}
      </Dialog>
    </div>
  );
}
