import styled from 'styled-components';

interface Prop {
    name: string
}
const MainTitle = ({ name }: Prop) => {
    return (
        <>
            <H1>{name}</H1>
        </>
    )
}

export default MainTitle

const H1 = styled.h1`
font-size:3rem;
text-align:center;
font-weight:800;
margin:1rem 0;
padding-left:1rem;
    border-left:4px solid #ff0000;
`