import SocialLink from './SocialLink'

const Footer = () => (
  <footer className="bg-secondary relative text-text">
    <div className="p-5 flex justify-center items-center">
      <ul className="flex gap-6">
        <SocialLink
          label="linkedin"
          href="https://www.linkedin.com/in/shakil22"
        />
        <SocialLink label="github" href="https://github.com/anisurrahmann" />
        <SocialLink label="dev" href="https://dev.to/anisurrahmann" />
      </ul>
    </div>
  </footer>
)

export default Footer
