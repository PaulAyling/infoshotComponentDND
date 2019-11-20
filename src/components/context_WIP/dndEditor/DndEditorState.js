// THIS IS PLACEHOLDER FILE - APP NOT CURRENTLY USING CONTEXTS
import React, { useReducer, useContext } from 'react';
import DndEditorReducer from './dndEditorReducer';

// import {
//   PLACEHOLDER_HOLDER
// } from '../types';

const DndEditorState = props => {
  const initialState = {
    cards: null,
    current: null,
    filtered: null,
    documentId: null,
    error: null
  };
  const [state, dispatch] = useReducer(DndEditorReducer, initialState);

  // Get Cards
  // const getCards = async () => {
  //   try {
  //     const currentDocId = () =>{
  //       if (current) {
  //         return current._id
  //       }
  //     }
  //     const res = await axios.get(`/api/card`);
  //     // Get only records related to current document
  //     const filteredData = res.data.filter((item) => item.documentId === currentDocId())
  //     dispatch({ type: GET_CARDS, payload: filteredData });
  //   } catch (err) {
  //     dispatch({ type: CARD_ERROR, payload: err.response.msg });
  //   }
  // };


  return (
    <DndEditorContext.Provider
      value={{

      }}>
      {props.children}
    </DndEditorContext.Provider>
  );
};

export default DndEditorState;
