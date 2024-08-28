import React from 'react';

function Home() {
  return (
    <div className="w-3/5 mx-auto pt-5">
      <h1 className="text-4xl text-blue-950 mb-5 font-semibold">
        7 Tips to Start React Code Refactoring
      </h1>
      <>
        <h2 className="text-2xl text-blue-950 mb-2 font-medium mt-9">
          Think about code formatting
        </h2>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          Some people add trailing commas, and some don’t. Some use single, while others double
          quotes for string. Maintaining the common code style can be really burdensome if you work
          in a team. And inconsistency in code style can make your code look dirty and hard to read.
          Thus, if you haven’t thought about using React refactoring tools before — that’s high time
          to do so.
        </p>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          One of the most popular and easy-to-use React refactoring tools is Prettier. You can just
          add it to the project, and it will take care of formatting for you. Prettier has some
          default style settings. But you can change them by your preferences by adding .prettierrc
          file with your formatting rules.
        </p>
      </>
      <>
        <h2 className="text-2xl text-blue-950 mb-2 font-medium mt-9">
          Get rid of unnecessary &lt;div&gt;’s and &lt;span&gt;’s
        </h2>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          When React 16.2 was released in November 2017, a lot of React developers sighed in relief.
          Prior to that, for a component to return a list of children, it was necessary to wrap the
          children in an extra element, such as &lt;div&gt; or &lt;span&gt;. With React 16.2, we
          received improved support for returning components’ children. Now developers can use
          so-called fragments. They look like empty JSX tags (&lt;&gt; … &lt;/&gt;). With fragments,
          you can pass a list of children to the component without adding extra nodes to the DOM.
        </p>
      </>
      <>
        <h2 className="text-2xl text-blue-950 mb-2 font-medium mt-9">Think about names</h2>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          Don’t be lazy to think over the names of the React components and variables. Every name
          should be self-explainable.
        </p>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          What does it do? If you cannot understand the purpose of a variable from its name – it’s
          time to rename it! This will help you and your team to easier understand the logic. It’ll
          also eliminate the time spent on making changes to existing components in the future.
        </p>
      </>
      <>
        <h2 className="text-2xl text-blue-950 mb-2 font-medium mt-9">Don’t Repeat Yourself</h2>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          DRY principle was first formulated in the book The Pragmatic Programmer. It states that
          “every piece of knowledge must have a single, unambiguous, authoritative representation
          within a system”.
        </p>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          Making your code DRY has a lot of benefits. It can save you a lot of time. If you need to
          change this code in the future, you will only do that in one place. Also, you will never
          have to worry you forgot to make changes in some places. Furthermore, you will keep the
          components cleaner and increase the readability of the code.
        </p>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          1. If you use a code block for more than two times, it’s time to extract it.
        </p>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          2. If you exceed a predefined number of lines in a component (e.g. 100 lines), there
          probably is the logic which can be extracted. Divide it into smaller components by
          functionalities.
        </p>
      </>
      <>
        <h2 className="text-2xl text-blue-950 mb-2 font-medium mt-9">
          Use functional over class components
        </h2>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          With the introduction of Hooks in React 16.8, we received access to React class features
          in functional components. Hooks solve a bunch of problems frequently encountered by
          developers during the last years. useEffect hook, as React docs suggest, allows us to
          group the component logic into small functions based on what pieces are related (instead
          of grouping the logic based on lifecycle methods). This helps us to better restructure our
          logic. All in all, refactoring React components with the help of hooks makes the code
          cleaner and reduces the amount of code.
        </p>
      </>
      <>
        <h2 className="text-2xl text-blue-950 mb-2 font-medium mt-9">
          Try to avoid arrow function in render
        </h2>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          What’s the problem with it? Every time a component is rendered, a new instance of the
          function is created. Actually, it’s not a big deal in case the component is rendered one
          or two times. But in other cases, it can affect performance. So, if you care about
          performance, declare the function before using it in render
        </p>
      </>
      <>
        <h2 className="text-2xl text-blue-950 mb-2 font-medium mt-9">Make the bundle smaller</h2>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          If you are using a third-party library, you shouldn’t load all of it if there is no need.
        </p>
        <p className="text-xl text-gray-600 hyphens-auto text-justify mb-3">
          You don’t load the whole library, just the method which you need here.
        </p>
      </>
    </div>
  );
}

export default Home;
