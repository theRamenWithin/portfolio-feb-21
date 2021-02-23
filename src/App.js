import HTML5Icon from './assets/icons/html5.svg'
import CSS3Icon from './assets/icons/css3.svg'
import JSIcon from './assets/icons/js.svg'
import RubyIcon from './assets/icons/ruby.svg'
import RailsIcon from './assets/icons/rails.svg'
import ReactIcon from './assets/icons/react.svg'

function App() {
  return (
    // Window container
    <section className="App h-full w-full flex">
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
              <p>A <u>React</u> front-end, utilising Material UI, with a <u>Ruby on Rails</u> API back-end, reponding to axios requests. This project was part of my group, final assignment at Coder Academy.</p>
              <p>AppointmentNow is a scalable, booking system customers and providers.</p>
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
              <p>A <u>Ruby on Rails</u> application, utilising <u>JavaScript</u> with the Twilio library. This project was the last assignment of my second term at Coder Academy.</p>
              <p>SwordArtisanOnline is a two-way market place for Historical European Martial Arts (HEMA) equipment.</p>
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
              <p>A fully <u>Ruby on Rails</u> application, created as part of 3-day hackaton at Coder Academy in a team of 3 collaborating over <u>Git</u>.</p>
              <p>Blogapp is a simple app for creating, reading, editing and deleting blog posts.</p>
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
              <p>A <u>Ruby</u> terminal application, utilising third-party gems. This project was the last assignment of my first term at Coder Academy.</p>
              <p>Dungeons Of Heck is a simple Doge themed dungeon crawler where you assume the role of a GOOD BOY to destroy HECKIN BAD THINGS across the land.</p>
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
              <p>A portfolio website written in vanilla <u>HTML5</u> & <u>CSS3</u>. This project was the second assignment of my first term at Coder Academy and the first website I ever made.</p>
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