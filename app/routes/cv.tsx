import type {LinksFunction} from 'remix'
import {MetaFunction} from 'remix'

export const links: LinksFunction = () => [
  {
    rel: 'preload',
    href: '/me-mobile.webp',
    as: 'image',
    media: '(max-width: 640px)',
  },
  {
    rel: 'preload',
    href: '/skills.png',
    as: 'image',
  },
  {
    rel: 'preload',
    href: '/me.webp',
    as: 'image',
    media: '(min-width: 641px)',
  },
]

export const meta: MetaFunction = () => ({
  title: 'Anisur Rahman | CV',
  description: "Anisur Rahman' CV",
  'twitter:title': 'Anisur Rahman | CV',
  'twitter:description': "Anisur Rahman' CV",
  'og:title': 'Anisur Rahman | CV',
  'og:description': "Anisur Rahman' CV",
})

const CV = () => {
  const age = Math.floor(
    (new Date().getTime() - new Date('1991-07-11').getTime()) / 3.15576e10,
  )
  const technologies = [
    {name: 'React', numberOfStars: 4},
    {name: 'Vue.js', numberOfStars: 2},
    {name: 'Angular', numberOfStars: 2},
    {name: 'Gatsby.js', numberOfStars: 3},
    {name: 'Next.js', numberOfStars: 4},
    {name: 'React Native', numberOfStars: 3},
    {name: 'Swift', numberOfStars: 2},
    {name: 'Wordpress', numberOfStars: 3},
    {name: 'ES6', numberOfStars: 4},
    {name: 'HTML', numberOfStars: 5},
    {name: 'CSS', numberOfStars: 4},
  ]
  const renderStars = (amount: number) =>
    // @ts-ignore
    // eslint-disable-next-line prefer-spread
    Array.apply(null, {length: 5}).map((_, i) => (
      <span
        className={`star ${i < amount ? 'text-primary' : 'text-white'}`}
        // eslint-disable-next-line react/no-array-index-key
        key={i}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          width="192"
          height="192"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none" />
          <path
            d="M132.4,190.7l50.4,32c6.5,4.1,14.5-2,12.6-9.5l-14.6-57.4a8.7,8.7,0,0,1,2.9-8.8l45.2-37.7c5.9-4.9,2.9-14.8-4.8-15.3l-59-3.8a8.3,8.3,0,0,1-7.3-5.4l-22-55.4a8.3,8.3,0,0,0-15.6,0l-22,55.4a8.3,8.3,0,0,1-7.3,5.4L31.9,94c-7.7.5-10.7,10.4-4.8,15.3L72.3,147a8.7,8.7,0,0,1,2.9,8.8L61.7,209c-2.3,9,7.3,16.3,15,11.4l46.9-29.7A8.2,8.2,0,0,1,132.4,190.7Z"
            fill="currentColor"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </svg>
      </span>
    ))

  return (
    <section id="cv" className="container mx-auto px-4 lg:px-16 text-text my-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-16">
        <div className="col-span-1">
          <div className="text-center">
            <img
              className="mx-auto w-[80%] max-w-[20rem] sm:max-w-none"
              alt="Profile"
              src="/me.webp"
              width={640}
              height={640}
              sizes="(max-width: 600px) 320px, 800px"
              srcSet="/me-mobile.webp 320w, /me.webp 640w"
            />
            <p className="mt-4">Hello, is it me you&apos;re looking for?</p>
          </div>
        </div>
        <div className="col-span-1 mt-6 sm:mt-0 sm:col-span-2 flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl mb-4 font-bold">
            A bit about me
          </h1>
          <div className="leading-[1.6]">
            <p>
              Coding since 2015, I started working professionally in 2017. In
              more than 4.5 years of professional experience, I have worked with
              4 Y Combinator startups, 1 big startup backed by Duracell, and 1
              USA based software agency. From the start, I have always enjoyed
              taking on new challenges besides my day-to-day work Very much
              flexible with Javascript/TypeScript, ReactJs, NextJs, NodeJs, and
              NestJs. Also highly interested to learn new technology.
            </p>
          </div>
        </div>
        <div className="col-span-1 mt-6 sm:mt-0">
          <h2 className="text-xl lg:text-2xl mb-4 font-bold">SKILLS</h2>
          <p className="">
            <span className="w">Javascript:</span> TypeScript, ES6, ReactJS,
            React Native (expo/CLI), NextJS, SvelteJS, Cypress, Webpack
          </p>
          <br />
          <p className="">
            <span className="skill">NodeJs:</span> Npm, ExpressJs, NestJs,
            Prsima, Jwt, Mongoose, TypeORM, Sequilize, Passport,Graphql, Jest
          </p>
          <br />
          <p className="">
            <span className="w">DataBase:</span> Mysql, MongoDB, Postgress
          </p>
          <br />
          <p className="">
            <span className="w">DevOps:</span> Serverless-stack, GCP, AWS
            Amplify, DynamoDB
          </p>
        </div>
        <div className="col-span-1 mt-6 sm:mt-0 sm:col-span-2">
          <h2 className="text-xl lg:text-2xl mb-4 font-bold">My timeline</h2>
          <div className="flex w-full flex-col timeline-container relative after:bg-lightpurple after:transition-colors dark:after:bg-darkgrey after:absolute after:w-1 after:h-full">
            <h1>Work EXperience Goes Here</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CV
