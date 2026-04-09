import styled from "styled-components";

import Colors from "../../theme/theme.colors";

export const HeaderContainer = styled.div`
 width: 100%;
 background-color: ${Colors.backgound.dark};
 display: flex;
 justify-content: space-between;
 padding: 20px;
 color: white;
`

export const HeaderTitle = styled.h2`
 font-weight: bold;
 font-size: 1.5rem;
 cursor: pointer;
`

export const HeaderItems = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
`

export const HeaderItem = styled.div`
 margin-right: 40px;
 cursor: pointer;
 transition: all 0.5s ease;
  &:hover {
    color: ${Colors.text.hover};
  }
`

export const HeaderItemContainer = styled.p`
 display: flex;
 gap: 3px;
 cursor: pointer;
 transition: all 0.5s ease;
  &:hover {
    color: ${Colors.text.hover};
  }
`

export const HeaderItemText = styled.p`
 position: relative;
 top: -5px;
`