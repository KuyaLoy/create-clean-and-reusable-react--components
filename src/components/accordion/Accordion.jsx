import { useContext, createContext } from "react";
import useToggle from "../hooks/useToggle";

// create a context
const AccordionContext = createContext();
const { Provider } = AccordionContext;

const Accordion = (props) => {
  const { title, content } = props;
  const { status: expand, toggleStatus: toggleExpand } = useToggle();

  const value = {
    expand,
    toggleExpand,
  };

  return (
    <Provider value={value}>
      <div className="accordion">
        <h1>accordion</h1>
        <AccordionHeader>{title}</AccordionHeader>
        <AccordionContent>{content}</AccordionContent>
      </div>
    </Provider>
  );
};

const AccordionHeader = ({ children }) => {
  const { toggleExpand } = useContext(AccordionContext);

  return (
    <button onClick={toggleExpand}>
      {children} <AccordionIcon />
    </button>
  );
};

const AccordionContent = ({ children }) => {
  const { expand } = useContext(AccordionContext);

  return expand && <div className="content">{children}</div>;
};

const AccordionIcon = () => {
  const { expand } = useContext(AccordionContext);

  return <span>{expand ? "-" : "+"}</span>;
};

export default Accordion;
