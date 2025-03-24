import { Address, EmailLink, Header4, Link, StyledFooter } from "./styled";
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
          <Link href="https://dummyjson.com" target="_blank" rel="norefferrer">DummyJSON</Link>
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
