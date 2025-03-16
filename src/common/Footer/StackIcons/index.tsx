import { ListItem, SocialsLinks } from "../SocialIcons/styled";
import { stack } from "./stack";
import { List } from "./styled";

export const StackIcons = () => {
  return (
    <List>
      {stack.map(({ name, url, Icon }) => (
        <ListItem key={name}>
          <SocialsLinks
            href={url}
            title={name}
            target="_blank"
            rel="norefferer"
          >
            <Icon />
          </SocialsLinks>
        </ListItem>
      ))}
    </List>
  );
};
