import React from "react";

const Quiz = () => {
  return (
    <div
      id="container"
      className="px-10 py-8 text-[#262626] bg-white m-auto flex flex-col rounded-xl min-w-[480px]"
    >
      <h1 className="mb-2 text-2xl font-semibold">Quiz App</h1>
      <hr className="h-[2px] border-none bg-[#707070]" />
      <h2 className="my-2 text-lg">What is the best way to center a div?</h2>
      <ul>
        <li className="border-2 rounded-md mb-2 px-3 py-2">Flexbox</li>
        <li className="border-2 rounded-md mb-2 px-3 py-2">Flexbox</li>
        <li className="border-2 rounded-md mb-2 px-3 py-2">Flexbox</li>
        <li className="border-2 rounded-md mb-2 px-3 py-2">Flexbox</li>
      </ul>
      <button className="bg-blue-400 rounded-md w25 w-1/3 self-center my-2 py-1 font-semibold">Next</button>
      <div className='text-center text-sm'>1 of 5 questions</div>
    </div>
  );
};

export default Quiz;
