"use client";

import { FC } from "react";

interface Props {
  onClose: () => void;
}

const ComingSoonModal: FC<Props> = ({ onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>🚀 Coming Soon</h2>
        <p>
          The interactive system design arena is under active development.
          You’ll soon be able to drag components, connect services, and test
          your design under massive load.
        </p>
        <button className="button" onClick={onClose}>Got it</button>
      </div>
    </div>
  );
};

export default ComingSoonModal;
