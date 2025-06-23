import { useState } from "react";
import "./FAQSection.css";

const faqs = [
  {
    question: "This is a frequently asked question?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
  },
  {
    question: "This is a frequently asked question?",
  },
  {
    question: "This is a very long frequently asked question about our services with more than one line?",
  },
  {
    question: "This is a frequently asked question?",
  },
  {
    question: "This is a question?",
  },
  {
    question: "This is a question?",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <p className="faq-subtitle">FAQ’s</p>
      <h2 className="faq-title">
        We want to help you <br /> with all your doubts
      </h2>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              <strong>{faq.question}</strong>
              <span>
                {openIndex === index ? (
                  <img src="./Images/chevron-up.png" alt="" />
                ) : (
                  <img src="./Images/chevron-down.png" alt="" />
                )}
              </span>
            </div>
            {openIndex === index && faq.answer && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
