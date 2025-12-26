"use client";

import { useEffect, useState } from "react";
import ComingSoonModal from "../../components/ComingSoonModal";

interface Props {
  params: { id: string };
}

export default function ArenaPage({ params }: Props) {
  const [showModal, setShowModal] = useState(false);

  // Show modal immediately on page load
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // If modal is closed, redirect back to home
  const handleClose = () => {
    setShowModal(false);
    window.location.href = "/"; // redirect to landing page
  };

  return (
    <>
      {showModal && <ComingSoonModal onClose={handleClose} />}
    </>
  );
}
