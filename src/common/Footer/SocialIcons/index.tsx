import { socials } from "./socials";
import { List, SocialsLinks } from "./styled";

export const SocialIcons = () => {
  return (
    <>
      <List>
        {socials.map(({ Icon, name, url }) => (
          <li key={name}>
            <SocialsLinks
              href={url}
              title={name}
              target="_blank"
              rel="norefferer"
            >
              <Icon />
            </SocialsLinks>
          </li>
        ))}
      </List>
    </>
  );
};
