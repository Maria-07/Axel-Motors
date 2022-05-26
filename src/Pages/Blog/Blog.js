import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto">
      <h2 className="my-5 text-2xl font-medium text-center">Blog Part</h2>
      <article className="container p-5 mx-auto mt-16 mb-32">
        <div className="blog text-left w-full shadow-md my-5  p-5">
          <h1 className=" text-3xl text-teal-700">
            How will you improve the performance of a React Application?
          </h1>
          <p className=" text-lg my-10">
            <span className=" font-semibold text-lg">Answer :</span> Although
            React allows web applications to swiftly refresh their user
            interfaces (UIs), this does not guarantee that your medium or large
            React application will run well. Its performance will be determined
            by how you use React when creating it, as well as your grasp of how
            React works and how components progress through their lifecycle
            phases. React gives your web project a lot of performance boosts,
            and you can get them using a variety of strategies, features, and
            tools.
            <br />
            <br /> There are a few ways to improve the performance of a React
            application:
            <br /> 1.Before deploying, use a Production build.
            <br /> 2.Use React to avoid adding extra nodes to the DOM.Fragment
            <br />
            3.Data Structures That Aren't Modifiable
            <br /> 4.Stay away from anonymous functions.
            <br /> 5.Lazy loading reduces the time it takes for an app to load.
          </p>
        </div>
        <div className="blog text-left w-full shadow-md my-5  p-5">
          <h1 className=" text-3xl text-teal-700">
            What are the different ways to manage a state in a React
            application?
          </h1>
          <p className=" text-lg my-10">
            <span className=" font-semibold text-lg">Answer :</span> Ways to
            manage a State :
            <br /> State Management at a Global Level In most circumstances, a
            state management library isn't required. You should only use an
            external library to manage it in larger applications that deal with
            complicated states. Data Fetching Libraries are a great way to get
            data. Pulling data from external APIs appears to be a simple
            problem, but it quickly becomes hard when you need to cache the data
            in memory (to save API calls), update it, and access it from
            multiple locations. For Complex State, use useReducer. When dealing
            with sophisticated state activity that may involve big objects, the
            useState hook may not be enough. The useReducer hook is a useful
            React hook for dealing with sophisticated state management without
            the need for third-party dependencies. It also lowers the
          </p>
        </div>
        <div className="blog text-left w-full shadow-md my-5  p-5">
          <h1 className=" text-3xl text-teal-700">
            How does prototypical inheritance work?
          </h1>
          <p className=" text-lg my-10">
            <span className=" font-semibold text-lg">Answer :</span> In
            JavaScript, inheritance refers to the concept of one object's
            methods/properties being accessible to another object. This is
            accomplished by using the '[[Prototype]]' mechanism to relate the
            second item to the first. Even though the method/property does not
            exist on the second object, you have the ability to use it since the
            second object "delegates" to the first object, which does have the
            requested property/method.
          </p>
        </div>
        <div className="blog text-left w-full shadow-md my-5  p-5">
          <h1 className=" text-3xl text-teal-700">
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h1>
          <p className=" text-lg my-10">
            <span className=" font-semibold text-lg">Answer :</span> To find a
            product of elements of an array by it's name , 1st we can set a
            state then make a query to search the product by it's name then get
            all data from API and set it on the state
          </p>
        </div>
        <div className="blog text-left w-full shadow-md my-5  p-5">
          <h1 className=" text-3xl text-teal-700">
            What is a unit test? Why should write unit tests?
          </h1>
          <p className=" text-lg my-10">
            <span className=" font-semibold text-lg">Answer :</span>UNIT TESTING
            is a type of software testing in which individual software units or
            components are examined. The goal is to make sure that each piece of
            software code functions correctly. During the development (code)
            phase of an application, developers perform unit testing. Unit tests
            are used to isolate and verify the correctness of a piece of code. A
            unit can be defined as a single function, method, procedure, module,
            or object.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Blog;
