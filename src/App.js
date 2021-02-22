import HTML5Icon from './assets/icons/html5.svg'
import CSS3Icon from './assets/icons/css3.svg'
import JSIcon from './assets/icons/js.svg'
import RubyIcon from './assets/icons/ruby.svg'
import RailsIcon from './assets/icons/rails.svg'
import ReactIcon from './assets/icons/react.svg'

function App() {
  return (
    // Window container
    <section className="App h-full w-full flex bg-white">
      {/* Content container */}
      <div className="p-12">

        {/* Lead text */}
        <section className="font-sans text-5xl font-bold leading-tight font-sans mb-8">
          Hello! I’m Alex Pike, a full-stack web developer based in Sydney, Australia. I am looking for an entry-level position where I can develop my craft as a customer-focused programmer.
        </section>
        
        <section>
          {/* Sub text */}
          <p className="mb-4 text-3xl leading-snug">
            I just graduated from <a href="https://coderacademy.edu.au/" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">Coder Academy</a> and am currently interning with <a href="https://www.healthbank.io/" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">HealthBank</a> until April 1st.
          </p>
          {/* Links */}
          <p className="leading-snug text-lg">
            <a href="https://github.com/theRamenWithin/" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">Github</a> / <a href="https://alexpike.work/docs/alex_pike_resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">Resume</a> / <a href="https://www.linkedin.com/in/alex-pike-ap/" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">LinkedIn</a> / <a href="https://twitter.com/theramenwithin/" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">Twitter</a>
          </p>
        </section>

        {/* Project container */}
        <section className="mt-6 text-lg">
          <div className="font-mono">
            <p>My Work</p>
          </div>
          {/* Project tiles */}
          <section className="flex flex-wrap justify-between mt-6">

            {/* Project tile */}
            <div className="max-w-sm mb-6">
              <p className="font-bold mb-2">AppointmentNow</p>
              <section className="flex mt-2">
                <img src={ReactIcon} alt="rails icon" className="w-12"/>
                <img src={RailsIcon} alt="rails icon" className="w-12"/>
              </section>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium dolor obcaecati illum voluptates voluptatibus corrupti! Ut qui cupiditate tempora.</p>
              <section className="mt-2">
                <a href="https://github.com/theRamenWithin/T3A2_Project/blob/main/docs/README.md" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">View on Github</a>
                <a href="https://appointmentnow.netlify.app/" className="text-blue-600 hover:text-blue-800 visited:text-purple-600 ml-10">View Live</a>
              </section>
            </div>

            {/* Project tile */}
            <div className="max-w-sm mb-6">
              <p className="font-bold mb-2">SwordArtisanOnline</p>
              <section className="flex mt-2">
                <img src={RailsIcon} alt="rails icon" className="w-12"/>
                <img src={JSIcon} alt="rails icon" className="w-12"/>
              </section>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium dolor obcaecati illum voluptates voluptatibus corrupti! Ut qui cupiditate tempora.</p>
              <section className="mt-2">
                <a href="https://github.com/theRamenWithin/SwordArtisanOnline" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">View on Github</a>
                <a href="https://swordartisanonline.herokuapp.com/" className="text-blue-600 hover:text-blue-800 visited:text-purple-600 ml-10">View Live</a>
              </section>
            </div>

            {/* Project tile */}
            <div className="max-w-sm mb-6">
              <p className="font-bold mb-2">Blogapp</p>
              <section className="flex mt-2">
                <img src={RailsIcon} alt="rails icon" className="w-12"/>
              </section>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium dolor obcaecati illum voluptates voluptatibus corrupti! Ut qui cupiditate tempora.</p>
              <section className="mt-2">
                <a href="https://github.com/theRamenWithin/blog_app" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">View on Github</a>
                <a href="https://blogapp-2020.herokuapp.com/" className="text-blue-600 hover:text-blue-800 visited:text-purple-600 ml-10">View Live</a>
              </section>
            </div>

            {/* Project tile */}
            <div className="max-w-sm mb-6">
              <p className="font-bold mb-2">Dungeons of Heck</p>
              <section className="flex mt-2">
                <img src={RubyIcon} alt="rails icon" className="w-12"/>
              </section>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium dolor obcaecati illum voluptates voluptatibus corrupti! Ut qui cupiditate tempora.</p>
              <section className="mt-2">
                <a href="https://github.com/theRamenWithin/DungeonsOfHeck" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">View on Github</a>
                <a href="https://rubygems.org/gems/dungeonsofheck" className="text-blue-600 hover:text-blue-800 visited:text-purple-600 ml-10">View on RubyGems</a>
              </section>
            </div>
            
            {/* Project tile */}
            <div className="max-w-sm mb-6">
              <p className="font-bold mb-2">Portfolio Website</p>
              <section className="flex mt-2">
                <img src={HTML5Icon} alt="rails icon" className="w-12"/>
                <img src={CSS3Icon} alt="rails icon" className="w-12"/>
              </section>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium dolor obcaecati illum voluptates voluptatibus corrupti! Ut qui cupiditate tempora.</p>
              <section className="mt-2">
                <a href="https://github.com/theRamenWithin/portfolio-sep-20" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">View on Github</a>
                <a href="https://alexpikeap.netlify.app" className="text-blue-600 hover:text-blue-800 visited:text-purple-600 ml-10">View Live</a>
              </section>
            </div>

          </section>
        </section>
      </div>
    </section>
  );
}

export default App;