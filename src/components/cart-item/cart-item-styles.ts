import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

interface CartItemImageProps {
  'imageUrl': string
}

export const CartItemContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  p {
    color: ${Colors.text.dark};
  }
`

export const CartItemImage = styled.div<CartItemImageProps>`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 250px;
  width: 170px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  flex: 1;

  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
  }

  p:nth-child(2) {
    font-weight: 500;
  }
`

export const CartItemQuantity = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;
  border: 1px solid ${Colors.backgound.dark};
  border-radius: 10px ;
  width: 126px;
  padding: 3px;
  transition: all 0.6s ease;

  &:hover {
    border: 1px solid ${Colors.text.border};
  }
  
  p {
    margin-left: 10px;
    margin-right: 10px;
  }

  svg:hover {
    cursor: pointer;
    color: ${Colors.text.hover};
    transition: all 0.6s ease;
  }  
`

export const RemoveButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border: 1px solid ${Colors.text.hoverText};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;


  &:hover {
    cursor: pointer;
    background: ${Colors.backgound.hoverGround};
    color: ${Colors.text.whithe};
    border: 1px solid ${Colors.backgound.hoverGround};
  }
`