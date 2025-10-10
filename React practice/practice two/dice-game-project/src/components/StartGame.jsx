import styled from 'styled-components'
import Button from './Button/Button.jsx'

const StartGame = ({toggle}) => {
  
  return (
    <Container className='containerClass'>
        <div className="diceImage">
            <img src='/assets/dices.png' alt='Dice' />
        </div>
        <div className="content">
          <label className='gameLabel'>DICE GAME</label>
          <Button click={toggle} className='play-now-btn' text='PLAY NOW'/>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
  height: 100%;
  padding: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

    .diceImage {
      width: 50%;
    }
    .content {
      width: 50%;
    }

    .content{
      text-align: right;

      .gameLabel {
        font-family: 'Poppins', sans-serif;
        font-size: 5rem;
        font-weight: bold;
        color: black;
      }

      .play-now-btn {
        padding-inline: 55px;
      }
    }
`