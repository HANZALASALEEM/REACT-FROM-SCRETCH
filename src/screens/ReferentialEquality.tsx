import React from 'react';

function ReferentialEquality() {
  return (
    <div className="w-3/5 mx-auto pt-5">
      <h1 className="text-4xl text-blue-950 mb-5 font-semibold">Referential Equality in React</h1>
      <>
        <h2 className="text-2xl text-blue-950 mb-2 font-medium mt-9">
          Understanding Referential Equality in React
        </h2>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          In a recent debugging session, I encountered a common issue related to state updates in
          React. A co-worker was using a custom hook to fetch and manipulate data. Despite logging
          indicating that the data was updated, the component wasn’t reflecting these changes. The
          problem stemmed from how React manages re-renders when state is updated. The state was
          updated with what appeared to be new data, but React was not triggering a re-render
          because the state updater function was setting the same reference for the state.
        </p>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          React’s state updater function (setState) checks if the new state value is different from
          the current state using the Object.is algorithm. If React determines that the new state is
          identical to the old state (based on object references), it will skip the re-render to
          optimize performance. In our case, since the state was being updated with an object that
          had the same reference as the previous state, React did not trigger a re-render.
        </p>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          To address this, it's essential to understand that React uses the reference of an object,
          not its content, to determine changes. When the state is updated with a new object that
          has a different memory reference, React will recognize this as a change and trigger a
          re-render. In the provided code, both the initial state and the state set by the API call
          were the same object reference, leading React to believe no update was necessary. The
          solution is to ensure that each state update uses a completely new object reference. By
          creating new object instances for the initial state and when setting state after data
          manipulation, React can correctly identify changes and re-render the component
          accordingly.
        </p>
      </>
    </div>
  );
}

export default ReferentialEquality;
