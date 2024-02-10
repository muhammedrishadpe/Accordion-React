import { useState } from "react";
import "./Accordion.css/";
import arrow from "./img/arrow.png";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // eslint-disable-next-line no-unused-vars
  const [faq, setFaq] = useState([
    {
      title: "How does react work?",
      content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sit
        labore ducimus perferendis error. Quam animi laborum quia laudantium
        reprehenderit hic quasi, provident, ad soluta, corporis alias nihil odio
        dicta.`,
    },
    {
      title: "How does react work?",
      content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sit
        labore ducimus perferendis error. Quam animi laborum quia laudantium
        reprehenderit hic quasi, provident, ad soluta, corporis alias nihil odio
        dicta.`,
    },
    {
      title: "How does react work?",
      content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sit
        labore ducimus perferendis error. Quam animi laborum quia laudantium
        reprehenderit hic quasi, provident, ad soluta, corporis alias nihil odio
        dicta.`,
    },
    {
      title: "How does react work?",
      content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sit
        labore ducimus perferendis error. Quam animi laborum quia laudantium
        reprehenderit hic quasi, provident, ad soluta, corporis alias nihil odio
        dicta.`,
    },
  ]);
  return (
    <div className="main">
      <h1>FAQ</h1>
      {faq.map((data, index) => (
        <div
          id="title"
          key={index}
          onClick={() => handleClick(index)}
          className={`accordion-title}`}
        >
          <div className="acc-container">
            <span>{data.title}</span>{" "}
            <img src={arrow} height={140} alt="" id="arrow-img" />
          </div>

          {index === activeIndex && (
            <div className="accordion-content">
              <p>{data.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
