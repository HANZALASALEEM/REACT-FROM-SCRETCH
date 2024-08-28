import React from 'react';

function ReduceRendering() {
  return (
    <div className="w-3/5 mx-auto pt-5">
      <h1 className="text-4xl text-blue-950 mb-5 font-semibold">
        How to reduce re-rendering in React Components
      </h1>
      <>
        <h2 className="text-2xl text-blue-950 mb-2 font-medium mt-9">
          Replacing useState() with useRef() hook.
        </h2>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          useState() is hook is commonly used hook in React functional components to re-render the
          component on state changes. But in some cases we need to track the update without
          re-rendering the component. To solve this we can use useRef() hook, when we use useRef()
          for the updates it will not fire re-rendering unlike useState()
        </p>
      </>
      <>
        <h2 className="text-2xl text-blue-950 mb-2 font-medium mt-9">
          Using Reselect library to create Memoized selectors
        </h2>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          React components have a fast lifecycle, they always suffer due to so much re-rendering,
          causing production time and performance. To fight this, developers created a third-party
          performance library re-select, a wrapper for the popular library Reselect, which is used
          with Redux to improve the performance by coding memoized selectors.
        </p>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          1. Selectors can compute derived data, allowing Redux to store the minimal possible state.
        </p>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          2. Selectors are efficient. A selector is not recomputed unless one of its arguments
          changes.
        </p>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          3. Selectors are composable. They can be used as input to other selectors.
        </p>
      </>
      <>
        <h2 className="text-2xl text-blue-950 mb-2 font-medium mt-9">
          Using SWR a React Hooks library for data fetching
        </h2>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          The name “SWR” is derived from stale-while-revalidate. SWR first returns the data from
          cache (stale), then sends the request (revalidate), and finally comes with the up-to-date
          data again. it will prevent the component from re-rendering multiple times.
        </p>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          With just one hook, you can significantly simplify the data fetching logic in your
          project. And it also covered in all aspects of speed, correctness, and stability to help
          you build better.
        </p>
      </>
      <>
        <h2 className="text-2xl text-blue-950 mb-2 font-medium mt-9">
          Memoization using useMemo() and useCallback()Hooks
        </h2>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          Memoization enables our react code to re-render components only if there is an update in
          the props. With this approach, developers can avoid unnecessary re-renderings and reduce
          the computational load in applications.
        </p>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          These Hooks reduce re-renderings by caching and returning the same output if the inputs
          are the same without any computations. When the inputs updates, the cache gets invalidated
          and the new component state gets rendered.
        </p>
      </>
    </div>
  );
}

export default ReduceRendering;
