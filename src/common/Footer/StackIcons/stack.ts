import { ReactComponent as ReactIcon } from "../StackIcons/icons/reactIcon.svg";
import { ReactComponent as ViteIcon } from "../StackIcons/icons/ViteIcon.svg";
import { ReactComponent as TypeScriptIcon } from "../StackIcons/icons/typescriptIcon.svg";
import { ReactComponent as StyledCompIcon } from "../StackIcons/icons/styledCompIcon.svg";
import { styleIcon } from "../StackIcons/styled";

export const stack = [
  {
    name: "React",
    url: "https://react.dev/",
    Icon: styleIcon(ReactIcon),
  },
  {
    name: "Vite",
    url: "https://vite.dev/",
    Icon: styleIcon(ViteIcon),
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    Icon: styleIcon(TypeScriptIcon),
  },
  {
    name: "Styled-Components",
    url: "https://styled-components.com/",
    Icon: styleIcon(StyledCompIcon),
  },
];
