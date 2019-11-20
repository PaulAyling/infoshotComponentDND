import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CardContext from '../../context/card/cardContext';

const CardItem = ({ card }) => {
  const cardContext = useContext(CardContext);

  const { deleteCard, setCurrentCard, clearCurrentCard } = cardContext;

  const { _id, label, cardType, summary, creatorId, documentId, linkUrl } = card;

  const onDelete = () => {
    deleteCard(_id);
    clearCurrentCard();
  };

  return (
    <div className={'flex-row ' + cardType} >
      <div>
        <a href={linkUrl} target='_blank'>
          {label}
        </a>
      </div>
      <div>
        <span>
          <button
            className='waves-effect waves-light btn-small'
            onClick={() => setCurrentCard(card)}>
            <i className='far fa-edit'></i>
          </button>
          <button
            className='waves-effect waves-light btn-small'
            onClick={() => onDelete(card)}>
            <i className='far fa-trash-alt'></i>
          </button>
        </span>
      </div>
    </div>
  );
};

CardItem.protoTypes = {
  card: PropTypes.object.isRequired
};

export default CardItem;
