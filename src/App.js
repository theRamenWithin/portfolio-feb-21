import React from 'react'

function App() {
  return (
    <section className="App h-screen w-full flex bg-gray-100">
      <div className="p-12">
        <section className="font-sans text-5xl font-bold leading-tight font-sans mb-8">
          Hello! I’m Alex Pike, a full-stack web developer based in Sydney, Australia. I am looking for an entry-level position where I can develop my craft as a customer-focused programmer.
        </section>
        <section className="text-3xl leading-snug">
          <p>
            I just graduated from <a href="https://coderacademy.edu.au/" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">Coder Academy</a> and am currently interning with <a href="https://www.healthbank.io/" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">HealthBank</a> until April 1st.
          </p>
          <p>
            Github
          </p>
        </section>
      </div>
    </section>
  );
}

export default App;