type AccordionProps = {
  name: string;
  className: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Accordion = ({ name, className, onClick }: AccordionProps) => {
  return (
    <button
      className={className ? "accordion active" : "accordion"}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Accordion;
