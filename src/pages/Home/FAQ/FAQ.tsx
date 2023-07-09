import React, { useCallback, useState } from 'react';

import faqList from '../../../data/faqs';

import './FAQ.scss';
import '../MainSection/Main.scss';

const FAQ: React.FC = (): JSX.Element => {
  const [idQuestion, setIdQuestion] = useState('');

  const handleQuestion = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();

    const { id } = event.target as HTMLDivElement;
    if (id === idQuestion) {
      setIdQuestion('');
    } else {
      setIdQuestion(id);
    }
  }, [idQuestion]);

  return (
    <div
      role="button"
      tabIndex={0}
      className="faq_content"
      onClick={handleQuestion}
      onKeyDown={() => {}}
    >

      <ul className="faq_content_list">
        {faqList.map((question) => (
          <li key={question.id} id={question.id} className="faq_content_item">
            <p className="faq_content_item__question">
              {`${question.id}. ${question.question}`}
            </p>
            <div
              id={question.id}
              className={`faq_content_item_btn faq_content_item_btn__${
                question.id === idQuestion ? 'close' : 'open'
              }`}
            />
            {question.id === idQuestion && (
              <p className="faq_content_item__answer">{question.answer}</p>
            )}
          </li>
        ))}
      </ul>

      <div className="faq_phone__box">
        <div className="faq_phone__icon" />
      </div>

    </div>
  );
};

export default FAQ;
