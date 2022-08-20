import Resume from './assets/docs/Resume_AlexPike.pdf';

import HTML5Icon from './assets/icons/html5.svg';
import CSS3Icon from './assets/icons/css3.svg';
import JSIcon from './assets/icons/js.svg';
import RubyIcon from './assets/icons/ruby.svg';
import RailsIcon from './assets/icons/rails.svg';
import ReactIcon from './assets/icons/react.svg';

import ProjectTile from './components/ProjectTile/ProjectTile';

function App() {
  return (
    // Window container
    <section className="App h-full w-full flex justify-center font-sans text-gray-600">
      {/* Content container */}
      <div className="pt-8 pb-8 h-full w-4/5 max-w-screen-xl">
        {/* Lead text */}
        <section className="md:text-5xl md:leading-tight sm:text-4xl text-3xl font-bold text-gray-800 mb-4">
          Hello! I’m Alex Pike, a full-stack web developer based in Sydney, Australia. I am looking for an entry-level
          position where I can develop my craft as a customer-focused programmer.
        </section>

        <section>
          {/* Sub text */}
          <p className="mb-4 md:text-3xl sm:text-2xl text-xl leading-snug">
            I graduated from{' '}
            <a
              href="https://coderacademy.edu.au/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Coder Academy
            </a>{' '}
            in Feb of this year and my most recent role was interning with{' '}
            <a
              href="https://www.healthbank.io/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              HealthBank
            </a>{' '}
            on their production Ruby on Rails API, utilising GraphQL and RSpec, until April 1st.
          </p>
          {/* Links */}
          <p className="leading-snug md:text-xl sm:text-lg text-base">
            <a
              href="https://github.com/theRamenWithin/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Github
            </a>{' '}
            /{' '}
            <a href={Resume} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              Resume
            </a>{' '}
            /{' '}
            <a
              href="https://www.linkedin.com/in/alex-pike-ap/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>{' '}
            /{' '}
            <a
              href="https://twitter.com/theramenwithin/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Twitter
            </a>{' '}
            /{' '}
            <a
              href="mailto:alex.pike.ap@outlook.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Email
            </a>
          </p>
        </section>

        {/* Project container */}
        <section className="lg:mt-16 md:mt-12 sm:mt-10 mt-8">
          <div className="font-mono sm:text-xl text-lg">
            <p>My Projects</p>
          </div>
          {/* Project tiles */}
          <section className="flex flex-wrap justify-start mt-6 sm:text-lg text-base">
            <ProjectTile
              title={'AppointmentNow'}
              icons={[ReactIcon, RailsIcon]}
              paragraphs={[
                <>
                  A <b>React</b> front-end, utilising Material UI, with a <b>Ruby on Rails</b> API back-end, reponding
                  to axios requests. This project was part of my group, final assignment at Coder Academy.
                </>,
                <>AppointmentNow is a scalable, booking system customers and providers.</>,
              ]}
              links={[
                { url: 'https://github.com/theRamenWithin/T3A2_Project/blob/main/docs/README.md', view: 'on Github' },
                { url: 'https://appointmentnow.netlify.app/', view: 'Live' },
              ]}
            />

            <ProjectTile
              title={'SwordArtisanOnline'}
              icons={[RailsIcon, JSIcon]}
              paragraphs={[
                <>
                  A <b>Ruby on Rails</b> application, utilising <b>JavaScript</b> with the Twilio library. This project
                  was the last assignment of my second term at Coder Academy.
                </>,
                'SwordArtisanOnline is a two-way market place for Historical European Martial Arts (HEMA) equipment.',
              ]}
              links={[
                { url: 'https://github.com/theRamenWithin/SwordArtisanOnline', view: 'on Github' },
                { url: 'https://swordartisanonline.herokuapp.com/', view: 'Live' },
              ]}
            />

            <ProjectTile
              title={'Blogapp'}
              icons={[RailsIcon]}
              paragraphs={[
                <>
                  A fully <b>Ruby on Rails</b> application, created as part of 3-day hackaton at Coder Academy in a team
                  of 3 collaborating over <b>Git</b>.
                </>,
                <>Blogapp is a simple app for creating, reading, editing and deleting blog posts.</>,
              ]}
              links={[
                { url: 'https://github.com/theRamenWithin/blog_app', view: 'on Github' },
                { url: 'https://blogapp-2020.herokuapp.com/', view: 'Live' },
              ]}
            />

            <ProjectTile
              title={'Dungeons of Heck'}
              icons={[RubyIcon]}
              paragraphs={[
                <>
                  A <b>Ruby</b> terminal application, utilising third-party gems. This project was the last assignment
                  of my first term at Coder Academy.
                </>,
                <>
                  Dungeons Of Heck is a simple Doge themed dungeon crawler where you assume the role of a GOOD BOY to
                  destroy HECKIN BAD THINGS across the land.
                </>,
              ]}
              links={[
                { url: 'https://github.com/theRamenWithin/DungeonsOfHeck', view: 'on Github' },
                { url: 'https://rubygems.org/gems/dungeonsofheck', view: 'on RubyGems' },
              ]}
            />

            <ProjectTile
              title={'My First Portfolio Website'}
              icons={[HTML5Icon, CSS3Icon]}
              paragraphs={[
                <>
                  A portfolio website written in vanilla <b>HTML5</b> & <b>CSS3</b>. This project was the second
                  assignment of my first term at Coder Academy and the first website I ever made.
                </>,
              ]}
              links={[
                { url: 'https://github.com/theRamenWithin/portfolio-sep-20', view: 'on Github' },
                { url: 'https://alexpikeap.netlify.app', view: 'Live' },
              ]}
            />
          </section>
        </section>
      </div>
    </section>
  );
}

export default App;
