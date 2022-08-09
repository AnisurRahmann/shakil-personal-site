import {MetaFunction} from 'remix'
import Case from '../components/Case'

export const meta: MetaFunction = () => ({
  title: 'Anisur Rahman | Portfolio',
  description: 'Projects Anisur Rahman worked on',
  'twitter:title': 'Anisur Rahman | Portfolio',
  'twitter:description': 'Projects Anisur Rahman worked on',
  'og:title': 'Anisur Rahman | Portfolio',
  'og:description': 'Projects Anisur Rahman worked on',
})

const Portfolio = () => (
  <section
    id="portfolio"
    className="container mx-auto px-4 lg:px-16 text-text my-12"
  >
    <div className="items-center content-center">
      <h2 className="text-center text-2xl mb-6 md:mb-12 font-bold">
        Some of my work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        <Case
          url="https://www.karaton.be"
          logoAlt="Karaton"
          img="/logokaraton.png"
          logoWidth={218}
          tags={['mongodb', 'expressjs', 'react', 'nodejs']}
        >
          <p className="mb-4">
            For Happs Development I created and maintained the <b>Angular</b>{' '}
            website for Karaton where speech therapists and parents of dyslexic
            could follow up on the progress their children/patients are making
            in the Karaton game.
          </p>
          <p className="mb-4">
            There were a lot of graphs to be shown with Highcharts, a payment
            integration through Mollie, different roles for
            admins/therapists/parents.
          </p>
          <p>
            In this team I worked as a Full Stack Developer, giving me a lot of
            insight in how the backend of a web application works.
          </p>
        </Case>
      </div>
    </div>
  </section>
)

export default Portfolio
