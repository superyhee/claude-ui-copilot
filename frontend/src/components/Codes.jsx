import React from 'react';
import { useSSE } from 'react-hooks-sse';

const Codes = () => {
  const state = useSSE(
    'chats',
    {
      code: null,
      lastCode: null
    },
    {
      stateReducer(prevState, action) {
        return {
          code: action.data.value,
          lastCode:
            action.data.value !== null
              ? prevState.lastCode + action.data.value
              : null
        };
      },
      parser(input) {
        return JSON.parse(input);
      }
    }
  );

  return <p>{state.lastCode !== null && ` ${state.lastCode}`}</p>;
};

export default Codes;
