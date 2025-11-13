import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { X } from "lucide-react";

export default function CardModal({ visible, onClose, header, content }) {
  return (
    <div>
      <div>
        <Dialog
          className="font-secondFont"
          closeIcon={<X size={20} />}
          header={<h2 style={{ fontSize: "16px" }}>{header}</h2>}
          visible={visible}
          onHide={onClose}
          style={{ width: "50vw" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        >
          {content}
        </Dialog>
      </div>
    </div>
  );
}
