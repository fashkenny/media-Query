import styled from "styled-components"

const Footer = ()=>{
    return (
       <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center"}}>
         <Container>
            <Footing>
                <div style={{fontWeight:"bold",fontSize:"25px"}}>Title</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
            </Footing>
            <Footing>
                <div style={{fontWeight:"bold",fontSize:"25px"}}>Title</div>
                <div>Content nininyoniono</div>
                <div>Content nininyoniono</div>
                <div>Content nininyoniono</div>
                <div>Content nininyoniono</div>
                <div>Content nininyoniono</div>
                
            </Footing>
            <Footing>
                <div style={{fontWeight:"bold",fontSize:"25px"}}>Title</div>
                <div>Content nininyoniono</div>
                <div>Content nininyoniono</div>
                <div>Content nininyoniono</div>
                <div>Content nininyoniono</div>
                <div>Content nininyoniono</div>
                
            </Footing>
            <Footing>
                <div style={{fontWeight:"bold",fontSize:"25px"}}>Title</div>
                <div>Content nininyoniono</div>
                <div>Content nininyoniono</div>
                <div>Content nininyoniono</div>
                <div>Content nininyoniono</div>
                <div>Content nininyoniono</div>
                
            </Footing>
            <Footing>
                <div style={{fontWeight:"bold",fontSize:"25px"}}>Title</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
            </Footing>
            <Footing>
                <div style={{fontWeight:"bold",fontSize:"25px"}}>Title</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
            </Footing>
            <Footing>
                <div style={{fontWeight:"bold",fontSize:"25px"}}>Title</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
            </Footing>
            <Footing>
                <div style={{fontWeight:"bold",fontSize:"25px"}}>Title</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
            </Footing>
            <Conditions>
                Lorem ipsum dolor sit amet consectetur, 
                Lorem ipsum dolor sit amet consectetur, 
                Lorem ipsum dolor sit amet consectetur, 
            </Conditions>
        </Container>
       </div>
    )
}

export default Footer

const Conditions  = styled.div`
padding-bottom: 10px;
`

const Footing = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
`

const Container = styled.div`
margin-top: 50px;
display: flex;
flex-wrap: wrap;
gap: 30px;
justify-content: space-evenly;
width: 90%;
`