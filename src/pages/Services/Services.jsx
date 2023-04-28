import React from "react";
import ServiceCard from "../../components/ui/Card/ServiceCard/ServiceCard";

const Services = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
      }}
    >
      <ServiceCard
        title="Soy un titulo mas elaborado"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, inventore! Temporibus soluta eius aperiam quisquam officiis voluptates porro pariatur deserunt tempore asperiores! Laboriosam, consectetur excepturi unde cum adipisci soluta itaque!"
        imagePath="https://images.unsplash.com/photo-1608068811588-3a67006b7489?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
      />
    </div>
  );
};

export default Services;
