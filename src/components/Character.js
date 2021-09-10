// Write your Character component here
import styled from 'styled-components';
import gsap from 'gsap';

const Styling = styled.div`
    color: #443e3e;
    background-color: rgba(255, 255, 255, .5);
    text-shadow: 1px 1px 5px yellow;

    .container {
        width: 50%;
    }
`

export default function Details(props) {
    const {name, bday, gender} = props;
    return(
        <Styling>
            <div className="container">
                <h2>{name}</h2>
                <p>Birth year: {bday}</p>
                <p>Gender: {gender}</p>
            </div>
        </Styling>
    )
}