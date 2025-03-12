import { Address, EmailLink, Header4, Paragraph, StyledFooter } from "./styled";
import { SocialIcons } from "./SocialIcons";
import email from "../../email";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div>
          <Header4>Technologie użyte w projekcie:</Header4>
          <ul>
            <li>React</li>
            <li>Vite</li>
            <li>TypeScript</li>
            <li>Styled-Components</li>
          </ul>
        </div>
<div>
<Header4>Dane pobierane z:</Header4>
<Paragraph>API</Paragraph>
</div>
        <Address>
            <Header4>Linki:</Header4>
          <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
          <SocialIcons />
        </Address>
      </StyledFooter>
    </>
  );
};

export default Footer;
