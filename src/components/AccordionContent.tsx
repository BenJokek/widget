import { useState } from "react";

type AccordionContentProps = {
  children: React.ReactNode;
  showAccordionProp: boolean;
};

const AccordionContent = ({
  children,
  showAccordionProp,
}: AccordionContentProps) => {

  const [showAccordion, setShowAccordion] = useState(showAccordionProp);

  return (
    <div
      className={
        showAccordion ? "accordion-content" : "accordion-content-display-none"
      }
    >
      {children}
    </div>
  );
};

export default AccordionContent;
