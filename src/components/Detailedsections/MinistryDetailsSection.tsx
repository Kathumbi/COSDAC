// src/components/Detailedsections/MinistryDetailsSection.tsx
import React from "react";
import { Ministry } from "@/data/ministries";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Props {
  ministry: Ministry;
}

const MinistryDetailsSection: React.FC<Props> = ({ ministry }) => {
  const navigate = useNavigate();

  return (
    <section className="container py-16 md:py-24">
      <h1 className="text-4xl font-bold mb-6">{ministry.name} Ministry</h1>
      <div className="aspect-video w-full overflow-hidden rounded-lg mb-6">
        <img
          src={ministry.image}
          alt={`${ministry.name} ministry`}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        {ministry.description}
      </p>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </section>
  );
};

export default MinistryDetailsSection;
