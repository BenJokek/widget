type AccordionContainerProps = {
  children: React.ReactNode;
};

const AccordionContainer = ({ children }: AccordionContainerProps) => {
  return <div className="accordion-container">
    {children}
  </div>;
};

export default AccordionContainer;
