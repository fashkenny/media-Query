import styled from "styled-components"

const Slider = ()=>{
    return (
        <Container>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Container>
    )
}

export default Slider

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
    overflow-x: hidden;
    width: 100vw;
    height: fit-content;
`

const Card = styled.div`
width: 90%;
height: 200px;
background-color: red;
border-radius: 10px;
@media screen and (min-width: 700px) {
    width: 300px;
}
`