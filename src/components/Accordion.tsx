import { useState } from "react";

type AccordionProps = {
  name: string;
  children: React.ReactNode;
};

const Accordion = ({ name, children }: AccordionProps) => {
  const [showAccordion, setShowAccordion] = useState(false);

  const handleClick = () => {
    setShowAccordion(!showAccordion);
  };

  return (
    <>
      <button
        className={showAccordion ? "accordion active" : "accordion"}
        onClick={handleClick}
      >
        {name}
      </button>
      <div
        className={
          showAccordion ? "accordion-content" : "accordion-content-display-none"
        }
      >
        {children}
      </div>
    </>
  );
};

export default Accordion;
