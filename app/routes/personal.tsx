import {Link, MetaFunction} from 'remix'
// eslint-disable-next-line no-use-before-define
import React from 'react'

export const meta: MetaFunction = () => ({
  title: 'Anisur Rahman | Personal',
  description: 'Personal information about Anisur Rahman',
  'twitter:title': 'Anisur Rahman | Personal',
  'twitter:description': 'Personal information about Anisur Rahman',
  'og:title': 'Anisur Rahman | Personal',
  'og:description': 'Personal information about Anisur Rahman',
})

const Personal = () => {
  const [isShortVersion, setIsShortVersion] = React.useState(true)
  const age = Math.floor(
    (new Date().getTime() - new Date('1994-12-16').getTime()) / 3.15576e10,
  )
  return (
    <section
      className="container mx-auto px-4 lg:px-16 my-8 lg:my-0 text-text dark:text-black"
      id="personal"
    >
      <div className="flex flex-col gap-y-8 md:grid md:grid-cols-2 md:gap-8 items-center content-center">
        <img
          width={194}
          height={150}
          className="min-h-[66.66%] min-w-[66.66%] mx-auto"
          alt="Illustration of me working on laptop"
          src="/personal.svg"
        />
        <div className="bg-purple rounded-lg p-6">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-2xl font-bold">Personal Information</h2>
            <button
              className="px-4 w-fit py-2 bg-primary text-white rounded-lg lg:hidden"
              type="button"
              onClick={() => setIsShortVersion(!isShortVersion)}
            >
              {isShortVersion ? 'Read long version' : 'Read short version'}
            </button>
            <p>
              Hi, I&apos;m Shakil. I&apos;m {age} years old, living in Sylhet,
              Bangladesh.
              <br />
              I&apos;m a professional <b>Software Engineer</b> who is heavily
              Focused on Front End, currently working at The Reference.
            </p>

            <div className={isShortVersion ? 'hidden lg:block' : ''}>
              <p>
                In general I really love to watch film. My favourite kind of
                Movie is a Thriller, drama, Sci-fi!
                <br />I like to do filming also. In my free time i write scripts
                and open my camera lenses to take some shot.
              </p>
              <p>
                I studied Computer Science Engineering at Metropolitan
                University, Sylhet. I chose the Mobile Development track, and
                went on Erasmus to Barcelona to learn more about Swift and Java.{' '}
                <br />
                <br />
                Coding since 2015, I started working professionally in 2017. In
                more than 4.5 years of professional experience, I have worked
                with 4 Y Combinator startups, 1 big startup backed by Duracell,
                and 1 USA based software agency. From the start, I have always
                enjoyed taking on new challenges besides my day-to-day work Very
                much flexible with Javascript/TypeScript, ReactJs, NextJs,
                NodeJs, and NestJs. Also highly interested to learn new
                technology.
              </p>
              <p>
                You can read more about my work in the{' '}
                <Link className="link" to="/portfolio">
                  portfolio
                </Link>{' '}
                section .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Personal
