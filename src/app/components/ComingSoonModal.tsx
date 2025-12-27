"use client";

interface Props {
  onClose: () => void;
}

export default function ComingSoonModal({ onClose }: Props) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>🚧 System Design Arena</h2>
        <p>
          Interactive drag & drop system design playground is coming soon.
          You will be able to design, test, and break real systems.
        </p>

        <button onClick={onClose}>Got it</button>
      </div>
    </div>
  );
}
