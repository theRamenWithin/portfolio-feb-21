import HTML5Icon from './assets/icons/html5.svg'
import CSS3Icon from './assets/icons/css3.svg'
import JSIcon from './assets/icons/js.svg'
import RubyIcon from './assets/icons/ruby.svg'
import RailsIcon from './assets/icons/rails.svg'
import ReactIcon from './assets/icons/react.svg'

function App() {
  return (
    // Window container
    <section className="App h-full w-full flex font-sans text-gray-600">
      {/* Content container */}
      <div className="p-12">

        {/* Lead text */}
        <section className="text-5xl font-bold text-gray-800 leading-tight mb-4">
          Hello! I’m Alex Pike, a full-stack web developer based in Sydney, Australia. I am looking for an entry-level position where I can develop my craft as a customer-focused programmer.
        </section>
        
        <section>
          {/* Sub text */}
          <p className="mb-4 text-3xl leading-snug">
            I just graduated from <a href="https://coderacademy.edu.au/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Coder Academy</a> and am currently interning with <a href="https://www.healthbank.io/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">HealthBank</a> until April 1st.
          </p>
          {/* Links */}
          <p className="leading-snug text-lg">
            <a href="https://github.com/theRamenWithin/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Github</a> / <a href="%PUBLIC_URL%/Resume_AlexPike.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Resume</a> / <a href="https://www.linkedin.com/in/alex-pike-ap/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">LinkedIn</a> / <a href="https://twitter.com/theramenwithin/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Twitter</a>
          </p>
        </section>

        {/* Project container */}
        <section className="mt-16">
          <div className="font-mono text-2xl">
            <p>My Projects</p>
          </div>
          {/* Project tiles */}
          <section className="flex flex-wrap justify-between mt-6 text-lg">

            {/* Project tile */}
            <div className="max-w-sm mb-6">
              <p className="font-bold mb-2 text-gray-800">AppointmentNow</p>
              <section className="flex mt-2">
                <img src={ReactIcon} alt="react icon" className="w-8 mr-2"/>
                <img src={RailsIcon} alt="rails icon" className="w-8 mr-2"/>
              </section>
              <section>
                <p className="mt-2">A <b>React</b> front-end, utilising Material UI, with a <b>Ruby on Rails</b> API back-end, reponding to axios requests. This project was part of my group, final assignment at Coder Academy.</p>
                <p className="mt-2">AppointmentNow is a scalable, booking system customers and providers.</p>
              </section>
              <section className="mt-2">
                <a href="https://github.com/theRamenWithin/T3A2_Project/blob/main/docs/README.md" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">View on Github</a> /
                <a href="https://appointmentnow.netlify.app/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline ml-2">View Live</a>
              </section>
            </div>

            {/* Project tile */}
            <div className="max-w-sm mb-6">
              <p className="font-bold mb-2 text-gray-800">SwordArtisanOnline</p>
              <section className="flex mt-2">
                <img src={RailsIcon} alt="rails icon" className="w-8 mr-2"/>
                <img src={JSIcon} alt="javascript icon" className="w-8 mr-2"/>
              </section>
              <section>
                <p className="mt-2">A <b>Ruby on Rails</b> application, utilising <b>JavaScript</b> with the Twilio library. This project was the last assignment of my second term at Coder Academy.</p>
                <p className="mt-2">SwordArtisanOnline is a two-way market place for Historical European Martial Arts (HEMA) equipment.</p>
              </section>
              <section className="mt-2">
                <a href="https://github.com/theRamenWithin/SwordArtisanOnline" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">View on Github</a> /
                <a href="https://swordartisanonline.herokuapp.com/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline ml-2">View Live</a>
              </section>
            </div>

            {/* Project tile */}
            <div className="max-w-sm mb-6">
              <p className="font-bold mb-2 text-gray-800">Blogapp</p>
              <section className="flex mt-2">
                <img src={RailsIcon} alt="rails icon" className="w-8 mr-2"/>
              </section>
              <section>
                <p className="mt-2">A fully <b>Ruby on Rails</b> application, created as part of 3-day hackaton at Coder Academy in a team of 3 collaborating over <b>Git</b>.</p>
                <p className="mt-2">Blogapp is a simple app for creating, reading, editing and deleting blog posts.</p>
              </section>
              <section className="mt-2">
                <a href="https://github.com/theRamenWithin/blog_app" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">View on Github</a> /
                <a href="https://blogapp-2020.herokuapp.com/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline ml-2">View Live</a>
              </section>
            </div>

            {/* Project tile */}
            <div className="max-w-sm mb-6">
              <p className="font-bold mb-2 text-gray-800">Dungeons of Heck</p>
              <section className="flex mt-2">
                <img src={RubyIcon} alt="ruby icon" className="w-8 mr-2"/>
              </section>
              <section>
                <p className="mt-2">A <b>Ruby</b> terminal application, utilising third-party gems. This project was the last assignment of my first term at Coder Academy.</p>
                <p className="mt-2">Dungeons Of Heck is a simple Doge themed dungeon crawler where you assume the role of a GOOD BOY to destroy HECKIN BAD THINGS across the land.</p>
              </section>
              <section className="mt-2">
                <a href="https://github.com/theRamenWithin/DungeonsOfHeck" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">View on Github</a> /
                <a href="https://rubygems.org/gems/dungeonsofheck" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline ml-2">View on RubyGems</a>
              </section>
            </div>
            
            {/* Project tile */}
            <div className="max-w-sm mb-6">
              <p className="font-bold mb-2 text-gray-800">Example Portfolio Website</p>
              <section className="flex mt-2">
                <img src={HTML5Icon} alt="html5 icon" className="w-8 mr-2"/>
                <img src={CSS3Icon} alt="css3 icon" className="w-8 mr-2"/>
              </section>
              <section>
                <p className="mt-2">A portfolio website written in vanilla <b>HTML5</b> & <b>CSS3</b>. This project was the second assignment of my first term at Coder Academy and the first website I ever made.</p>
              </section>
              <section className="mt-2">
                <a href="https://github.com/theRamenWithin/portfolio-sep-20" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">View on Github</a> /
                <a href="https://alexpikeap.netlify.app" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline ml-2">View Live</a>
              </section>
            </div>

          </section>
        </section>
      </div>
    </section>
  );
}

export default App;