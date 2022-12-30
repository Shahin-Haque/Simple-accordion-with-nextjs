import Image from 'next/image';
import { useState } from 'react';
import arrowUp from '../public/chevron-down.svg';

const Accordion = ({ data }) => {
  const [isOpenAnswer, setIsOpenAnswer] = useState(false);
  const { title, body, id } = data;
  return (
    <div className="faq__wrapper">
      <h4 className="faq" onClick={() => setIsOpenAnswer(!isOpenAnswer)}>
        {title}
        <Image
          src={arrowUp}
          alt="arrowUp"
          className={`${isOpenAnswer ? 'arrowUp open' : 'arrowUp'}`}
        />
      </h4>

      <p className={`${isOpenAnswer ? 'ans open' : 'ans'}`}>{body}</p>
    </div>
  );
};

export default Accordion;
