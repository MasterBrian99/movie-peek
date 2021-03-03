import styled from 'styled-components';
interface Prop {
    name: string,
    color: string
}
const MainTitle = ({ name, color }: Prop) => {
    return (
        <>
            <H1 color={color}>{name}</H1>
        </>
    )
}

export default MainTitle

const H1 = styled.h1`
font-size:3rem;
text-align:center;
font-weight:800;
margin:1rem 0;
color:${props => props.color};
padding-left:1rem;
    border-left:4px solid #ff0000;

`