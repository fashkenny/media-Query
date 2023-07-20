import styled from "styled-components"

const Hero = ()=>{
    return (
        <Container>
            <Image>Image</Image>
            <Text>
           <Wrap>
           <Bb >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Bb>Wrap
                <Sm style={{fontSize:"15px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque facere ab minus repudiandae odit velit quidem unde at, vitae earum?</Sm>
           </Wrap>
            </Text>
        </Container>
    )
}

export default Hero

const Container = styled.div`
background-color:purple ;
    @media screen and (min-width:680px) {
        display: flex;
height: 300px;
align-items: center;
    }
`
const Wrap = styled.div`
    width: 90%;
    height: 90%;
`
const Sm = styled.div``
const Bb = styled.div`
font-size: 25px;
@media screen and (min-width:1024px) {
font-size: 40px;
    }
`

const Image = styled.div`
width: 100%;
height: 200px;
@media screen and (min-width:680px) {
height: 100%;
    }
background: red;
color: white;
/* object-fit: top; */
`
const Text = styled.div`
display: flex;
justify-content: center;
align-items: center;
@media screen and (min-width:680px) {
height: 100%;
/* margin-top: 20px; */
    }
background-color: yellow;
`