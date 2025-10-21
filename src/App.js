import Resume from './assets/docs/Alex_Pike_CV_2025.pdf';

// import HTML5Icon from './assets/icons/html5.svg';
// import CSS3Icon from './assets/icons/css3.svg';
// import RubyIcon from './assets/icons/ruby.svg';
// import RailsIcon from './assets/icons/rails.svg';
// import ReactIcon from './assets/icons/react.svg';
// import JSIcon from './assets/icons/js.svg';
import TSIcon from './assets/icons/ts.svg';
import CypressIcon from './assets/icons/cypress.svg';

import ProjectTile from './components/ProjectTile/ProjectTile';
import ProjectTileHeading from './components/ProjectTile/ProjectTileHeading';
import ProjectTileSection from './components/ProjectTile/ProjectTileSection';
import LinkContainer from './components/Link/LinkContainer';
import Background from './components/Background/Background';

export default function App() {
  return (
    <>
      {/* Window container */}
      <section className="App static h-full w-full flex justify-center font-sans text-gray-600">
        <Background />
        {/* Content container */}
        <div className="pt-8 pb-8 h-full w-4/5 max-w-screen-xl z-10">
          {/* Lead text */}
          <section className="md:text-5xl md:leading-tight sm:text-4xl text-3xl font-bold text-gray-800 mb-4 bg-opacity-80 bg-white rounded">
            Hello! I’m Alex Pike, a Platform Engineer employed by Planit Testing, based in
            Naarm/Melbourne, Australia.
          </section>

          <section>
            {/* Sub text */}
            <p className="mb-4 md:text-3xl sm:text-2xl text-xl leading-snug bg-opacity-80 bg-white rounded">
              I create automated, end-to-end, API and component testing solutions using
              the latest frameworks and tools to mitigate risk in products and ensure
              quality in code as part of a complete CI/CD pipeline.
            </p>
            {/* Links */}
            <p className="leading-snug md:text-xl sm:text-lg text-base">
              <LinkContainer
                links={[
                  { url: 'https://github.com/theRamenWithin/', view: 'Github' },
                  { url: Resume, view: 'Resume' },
                  { url: 'https://www.linkedin.com/in/alex-pike-ap/', view: 'LinkedIn' },
                  { url: 'alex.pike.ap@outlook.com', view: 'Email' },
                ]}
              />
            </p>
          </section>

          {/* Project container */}
          <section className="lg:mt-16 md:mt-12 sm:mt-10 mt-8">
            {/* Project tiles */}
            <ProjectTileHeading heading={'Professional Projects'} />
            <ProjectTileSection>
              <ProjectTile
                title={'Cypress TypeScript Demo'}
                icons={[CypressIcon, TSIcon]}
                paragraphs={[
                  <>
                    An implementation of the <b>Cypress</b> testing framework in{' '}
                    <b>TypeScript</b> created as a demonstration of a native
                    implementation, using best practices and practical methods.
                  </>,
                ]}
                links={[
                  {
                    url: 'https://github.com/theRamenWithin/cypressjupitertoys-typescript',
                    view: 'Github',
                  },
                ]}
              />

              <ProjectTile
                title={'SugerAgent TypeScript Demo'}
                icons={[TSIcon]}
                paragraphs={[
                  <>
                    An implementation of <b>SuperAgent</b> API library in{' '}
                    <b>TypeScript</b> created as a demonstration of how to do API testing
                    based off of Swagger's sample Petstore server.
                  </>,
                ]}
                links={[
                  {
                    url: 'https://github.com/theRamenWithin/swaggerpetstore-superagent-typescript',
                    view: 'Github',
                  },
                ]}
              />
            </ProjectTileSection>

            {/* <ProjectTileHeading heading={'Class Projects'} />
            <ProjectTileSection>
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
                  { url: 'https://github.com/theRamenWithin/T3A2_Project/blob/main/docs/README.md', view: 'Github' },
                  { url: 'https://appointmentnow.netlify.app/', view: 'Live' },
                ]}
              />

              <ProjectTile
                title={'SwordArtisanOnline'}
                icons={[RailsIcon, JSIcon]}
                paragraphs={[
                  <>
                    A <b>Ruby on Rails</b> application, utilising <b>JavaScript</b> with the Twilio library. This
                    project was the last assignment of my second term at Coder Academy.
                  </>,
                  'SwordArtisanOnline is a two-way market place for Historical European Martial Arts (HEMA) equipment.',
                ]}
                links={[
                  { url: 'https://github.com/theRamenWithin/SwordArtisanOnline', view: 'Github' },
                  { url: 'https://swordartisanonline.herokuapp.com/', view: 'Live' },
                ]}
              />

              <ProjectTile
                title={'Blogapp'}
                icons={[RailsIcon]}
                paragraphs={[
                  <>
                    A fully <b>Ruby on Rails</b> application, created as part of 3-day hackaton at Coder Academy in a
                    team of 3 collaborating over <b>Git</b>.
                  </>,
                  <>Blogapp is a simple app for creating, reading, editing and deleting blog posts.</>,
                ]}
                links={[
                  { url: 'https://github.com/theRamenWithin/blog_app', view: 'Github' },
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
                  { url: 'https://github.com/theRamenWithin/DungeonsOfHeck', view: 'Github' },
                  { url: 'https://rubygems.org/gems/dungeonsofheck', view: 'RubyGems' },
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
                  { url: 'https://github.com/theRamenWithin/portfolio-sep-20', view: 'Github' },
                  { url: 'https://alexpikeap.netlify.app', view: 'Live' },
                ]}
              />
            </ProjectTileSection> */}
          </section>
        </div>
      </section>
    </>
  );
}
