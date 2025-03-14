import { Address, EmailLink, Header4, Paragraph, StyledFooter } from "./styled";
import { SocialIcons } from "./SocialIcons";
import email from "../../email";
import { StackIcons } from "./StackIcons";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div>
          <Header4>Technologies used:</Header4>
          <StackIcons />
        </div>
        <div>
          <Header4>API data driven from:</Header4>
          <Paragraph>API</Paragraph>
        </div>
        <Address>
          <Header4>Contact & Links</Header4>
          <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
          <SocialIcons />
        </Address>
      </StyledFooter>
    </>
  );
};

export default Footer;
