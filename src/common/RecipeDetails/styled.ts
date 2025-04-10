import styled from "styled-components";
import { Image } from "../Main/LatestRecipes/styled";
import { ExtraInfo, StyledPrepTimeIcon } from "../Main/PopularPicks/styled";
import { ReactComponent as CutleryIco } from "../../icons/cutlery.svg";
import { ReactComponent as ChefHatIco } from "../../icons/chefHat2.svg";
import { ReactComponent as FlagIco } from "../../icons/flag.svg";

export const BackgroundImage = styled.div<{ $imageurl?: string }>`
  position: relative;
  min-height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ $imageurl }) =>
      $imageurl ? `url(${$imageurl})` : "none"};
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    filter: blur(5px);
    z-index: -1;
  }
`;

export const RecipeWrapper = styled.div`
  margin: 0 auto;
  max-width: 50vw;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageCont = styled.div`
  width: 50%;
  height: auto;
  margin: 20px 0;
  animation-name: rollIn;
  animation-duration: 1s;
  animation-iteration-count: 1;

  @keyframes rollIn {
    0% {
      transform: translateX(-40vw) rotate(-180deg);
    }
  }
`;

export const RecipeImage = styled(Image)`
  box-shadow: none;
  border-radius: 50%;
`;

export const Span = styled.span`
  padding: 0.75rem 0;
  font-size: clamp(0.75rem, 2vw, 1.5rem);
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
`;

export const DataSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.white};
  font-size: clamp(0.5rem, 2vw, 1.25rem);
`;

export const PrepTimeSpan = styled(DataSpan)`
  align-items: flex-end;
`;

export const FlagIcon = styled(FlagIco)`
  width: 2rem;
  height: auto;
`;

export const ChefHatIcon2 = styled(ChefHatIco)`
  width: 2rem;
  height: auto;
`;

export const StyledPrepTimeIconWhite = styled(StyledPrepTimeIcon)`
  width: 2rem;
  height: auto;
  color: ${({ theme }) => theme.color.white};
  margin: 0;
`;

export const CutleryIcon = styled(CutleryIco)`
  width: 2rem;
  height: auto;
`;

export const RecipeExtraInfo = styled(ExtraInfo)`
  justify-content: space-around;
  background-color: ${({ theme }) => theme.color.fruitSalad};
  margin: 0;
`;

export const RecipeExtraInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RecipeName = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.greenHaze};
  margin-bottom: 1.25rem;
  font-size: clamp(1.75rem, 6vw, 3rem);
  text-align: center;
  margin-top: 3rem;
`;

export const Header3 = styled.h3`
  align-self: start;
  margin: 0;
  padding: 50px 0 20px 30px;
  font-size: clamp(20px, 2vw, 28px);
  color: ${({ theme }) => theme.color.greenHaze};
`;

export const SecondHeader3 = styled(Header3)`
  padding: 20px 0 20px 30px;
`;

export const List = styled.ul`
  align-self: start;
  padding: 0 30px;
  margin-left: 18px;
`;

export const ListItem = styled.li`
  padding: 10px 0;
  color: ${({ theme }) => theme.color.greenHaze};
  font-size: clamp(16px, 2vw, 20px);

  &:first-child {
    padding: 0;
    margin: 0 0 8px 0;
  }

  &:last-child {
    margin: 0 0 20px 0;
  }
`;

export const ListItemNum = styled(ListItem)`
  list-style-type: decimal;
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 50vw;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    opacity: 0.7;
    z-index: -1;
  }
`;
