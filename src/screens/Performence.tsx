import React from 'react';

function Performence() {
  return (
    <div className="w-3/5 mx-auto pt-5">
      <h1 className="text-4xl text-blue-950 mb-5 font-semibold">
        Tips for Optimizing Your React App’s Performance
      </h1>
      <>
        <h2 className="text-2xl text-blue-950 mb-2 font-medium mt-9">
          Code splitting and lazy loading
        </h2>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          Code splitting allows you to break your front-end react bundle into smaller chunks that
          can be downloaded together in parallel or at the time they are needed, and lazy loading
          allows you to load less important parts of an application later, improving application
          performance. These combined can help increase initial load times for an application,
          affecting our LCP metric.
        </p>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          By default, reactjs sends one .js file - usually bundled together by a bundler like
          webpack - which includes all of your react application and runs it in the client’s
          browser. This is fine if your app is small, but as your app grows in size, this becomes a
          bottleneck. Also, some pieces of your app are more important to load first. Getting the
          user the ProductSearch component on an e-commerce page is a much higher priority than
          getting them the admin page 99% of users will never see.
        </p>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          You can set up lazy loading in React using React.lazy and React.suspense. When using lazy
          and suspense, react will automatically code split the components that will be lazy loaded
          and grab them when they’re needed. This keeps the main bundle small and makes your initial
          render much quicker. But be sure to not lazy load anything above the fold, as that can
          actually drop your LCP score.
        </p>
      </>
      <>
        <h2 className="text-2xl text-blue-950 mb-2 font-medium mt-9">
          Implement React server-side rendering (SSR)
        </h2>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          Server-side rendering is when the page is rendered on the server and then sent over to the
          client instead of sending a bundle that is rendered client-side. The client’s cpu is not
          usually a bottleneck for a react application, but bandwidth and latency between the client
          and server commonly are. By rendering server-side, we can grab all of the data we need
          from the database before rendering our page, which removes extra trips to the server and
          can speed up rendering.
        </p>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          Nextjs, made by the same people who made the Vercel deployment platform, is the most
          popular way to implement SSR in React, and it’s very simple to use. You can simply run npx
          create-next-app@latest your-app-name to generate a nextjs project. Everything will render
          server-side by default, with the option to render specific components client-side if
          necessary.
        </p>
      </>
      <>
        <h2 className="text-2xl text-blue-950 mb-2 font-medium mt-9">Virtualize lists</h2>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          List virtualization, also known as windowing, is when you only render the part of a list
          that is visible to the user. This helps reduce DOM nodes on a page and make scrolling
          smoother, which can increase your INP score.
        </p>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          Let’s say you have an e-commerce store and someone does a search for “The”. I don’t know
          why they would do that, but it’s the most common word in the English language, meaning
          you’ll probably have to render a pretty long list of results. If we virtualize the list
          instead of rendering all thousand entries, we can cut down on the render time and prevent
          freezing while scrolling.
        </p>
      </>
      <>
        <h2 className="text-2xl text-blue-950 mb-2 font-medium mt-9">
          Properly use React’s Keys property when rendering a list
        </h2>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          React requires giving every item in a generated list of jsx a unique key. People tend to
          use the array index to handle this, but this can cause unnecessary re-renders. Keys are
          used by react to tell if it needs to re-render items in the list. If you use the array
          index and then an item is removed or the array is sorted, the keys in the new list will no
          longer match the old index keys, and all of those items will have to be re-rendered. If we
          use unique keys, like a userId, we can prevent React from needing to re-render any items
          in the list when the list’s order changes.
        </p>
      </>
      <>
        <h2 className="text-2xl text-blue-950 mb-2 font-medium mt-9">Memoization</h2>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          Memoization is a specific type of caching where you cache the result of a function. This
          prevents you from calculating the same values over and over again.
        </p>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          In React, every time a component’s state changes, it causes all of its children to
          re-render, regardless if the children have had state or prop changes. This prevents UI
          errors, but at the expense of performance for your app. However, with memoization, we can
          cache functional components, calculations they have to make, or functions they use in
          order to skip fully re-rendering components.
        </p>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          React has the useMemo hook, which caches the results of a function call; React.memo, a
          higher order component which can render a functional component from cache if its props are
          unchanged (since functional components are, well, functions); and useCallback, which
          caches a function declaration.
        </p>
      </>
      <>
        <h2 className="text-2xl text-blue-950 mb-2 font-medium mt-9">useMemo</h2>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          useMemo caches the result of a function. This is especially useful if you have a component
          that has large calculations it has to handle. For a practical example, if you had an
          e-commerce store that had a large list of items, and you needed to calculate tax cost for
          each item based on location in the front-end. You may need to loop through a large list of
          items every time a parent component has a state change, even if nothing in its own state
          or props hasn’t changed. But for the sake of having a bundled example showing re-rendering
          and the speed of rendering from cache, our example code will go through a massive loop and
          add to a number instead of adding tax to a list of items. By memoizing the result of our
          expensiveCalculation function, even when our parent components state updates, we will
          reuse the last result of the function as long as the count hasn’t changed.
        </p>
      </>
      <>
        <h2 className="text-2xl text-blue-950 mb-2 font-medium mt-9">
          Implement Throttling and debouncing
        </h2>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          Throttling is when you call a function on an event and then delay the continual execution
          of the function to certain time intervals as the event continues to trigger, and
          debouncing is when you wait a certain amount of time after an event happens to execute a
          function. They can both help with your INP score by making user interactions smoother.
          They sound very similar, but there is a slight difference between the two, and we can see
          it in how and why they’re implemented. We will implement both throttling and debouncing
          with the lodash library.
        </p>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          Let’s pretend we were a mega sized tech company that had an application to allow writing
          documents and saving the data in the cloud. We’ll call the application Doodle Docs. We
          wouldn’t want to save the document after every keystroke, because that would be overkill.
          But we also wouldn’t want to wait until after they stopped typing, because someone could
          be on a huge typing spree, lose internet connection, and then lose all their work. That
          would be rough! So what if instead of waiting for them to stop, we just periodically
          backed up what they were typing in time intervals?
        </p>
      </>
    </div>
  );
}

export default Performence;
