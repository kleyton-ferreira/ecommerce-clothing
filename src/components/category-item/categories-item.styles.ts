import styled from "styled-components"
import Colors from "../../theme/theme.colors"

interface CategoryItemContainerProps {
  backgroundImage: string
}

export const CategoryitemContainer = styled.div<CategoryItemContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  grid-gap: 15px;
  border-radius: 10px;
  background: black ;
  overflow: hidden;
 
  &::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-blend-mode: color;
  background: ${(props) => `url("${props.backgroundImage}")`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  }

   &:hover::before {
    transform: scale(1.02) ;
   }
  
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black ;
    border-radius: 10px;
    opacity: 0;
    transition: all 0.3s ease; 
  }

   &:hover::after {
    opacity: 0.3;
   }
`

export const CategoryName = styled.div`
  position: relative;
  z-index: 2 ;
  color: ${Colors.text.whithe};
  text-align: center;
  background: rgba(233, 236, 239, 0.45);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 10px;
  border: 1px solid ${Colors.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    background: rgba(233, 236, 239, 0.55);
  }

  & p:nth-child(1) {
    font-weight: 600;
  }
`