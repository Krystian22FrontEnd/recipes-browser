import {
  BackgroundImage,
  Header2,
  Header3,
  Link,
  Paragraph,
  Wrapper,
} from "./styled";
import { socials } from "../Footer/SocialIcons/socials";

const [getGit] = socials;
const getUrl = getGit.url;

export const About = () => {
  return (
    <BackgroundImage>
      <Header2>About me</Header2>
      <Wrapper>
        <Header3>Krystian Krupiński</Header3>
        <Paragraph>
          Hi, I'm Krystian — a motivated and curious Frontend Developer focused
          on building responsive, clean, and user-friendly web applications.
        </Paragraph>
        <Paragraph>
          This project was created as part of my learning journey with React,
          React Router, and working with external REST APIs. I like to approach
          every task with attention to detail, even if it means going the extra
          mile.
        </Paragraph>
        <Paragraph>
          Outside of coding, I'm an introvert who enjoys calm environments, a
          good book, and solid gym session. Feel free to check out my work on{" "}
          <Link href={getUrl}>GitHub</Link> — or just say hi if you'd like!
        </Paragraph>
      </Wrapper>
    </BackgroundImage>
  );
};
