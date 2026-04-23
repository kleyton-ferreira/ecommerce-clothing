import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const Container = styled.div`
  padding: 0px 40px 20px 40px;
`

export const CategoriesContainerMax = styled.div`
 width: 1830px;
 height: 860px;
 margin: 0 auto;
`

export const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;

  margin-bottom: 26px;

  p {
    font-size: 21px;
    font-weight: 500;
  }

  strong {
    color: ${Colors.text.maroon} ;
  }
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: start;
  margin-top: 5px;
  grid-row-gap: 30px;
`

export const IconContainer = styled.div`
  display: flex;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: "" ;
    position: absolute;
    top: 3px;
    left: 3px;
    background: ${Colors.text.maroon};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    z-index: 1;
    transition: all 0.3s ease;
  }

  &:hover::after {
    opacity: 0.8;
  } 
`