import { LinkedinIcon, GithubIcon } from "lucide-react";

import { EXTERNAL_LINKS } from "consts";

const links = [
  {
    label: "link to linkedin profile",
    icon: <LinkedinIcon color="#D1D1D1" size={25} />,
    href: EXTERNAL_LINKS.LINKEDIN,
  },
  {
    label: "link to github profile",
    icon: <GithubIcon color="#D1D1D1" size={25} />,
    href: EXTERNAL_LINKS.GITHUB,
  },
];

const ExternalLinks = (): React.ReactElement => {
  return (
    <>
      {links.map(({ href, icon, label }) => (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          key={label}
        >
          {icon}
        </a>
      ))}
    </>
  );
};

export default ExternalLinks;
