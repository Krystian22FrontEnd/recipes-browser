import { ReactComponent as GitHubIcon } from "../SocialIcons/icons/ghIcon.svg";
import { ReactComponent as LinkedinIcon } from "../SocialIcons/icons/linkedinIcon.svg";
import { styleIcon } from "./styled";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/Krystian22FrontEnd",
    Icon: styleIcon(GitHubIcon),
  },
  {
    name: "Linkedin",
    url: "www.linkedin.com/in/krystian-krupiński-frontend",
    Icon: styleIcon(LinkedinIcon),
  },
];
