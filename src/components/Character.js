// Write your Character component here
import styled from 'styled-components';
import gsap from 'gsap';

const Styling = styled.div`
    display
    color: #443e3e;
    background-color: rgba(255, 255, 255, .5);
    text-shadow: 1px 1px 5px yellow;
    width: 45%;
    text-align: center;
    margin: auto;
    border-radius: 2rem;
    margin-bottom: 1%;
    border: 2px solid yellow;

    .container {
        align-items: center;
        padding: 2%;
        margin: auto;
        margin-top: 1%;
        margin-bottom: 1%;
        height: 80%;
        background-color: rgba(255, 255, 255, .75);
        width: 40%;
        border-radius: 2rem;
    }

    ul {
        text-align: left;
        font-size: 1rem;
        font-weight: normal;
        text-align: left;
        display: inline-block
    }
    h3 {
        margin: 0;
        padding: 0;
        font-size: 1.35rem;
    }
`

export default function Details(props) {
    const {name, bday, gender, films} = props;
    console.log(films)
    return(
        <Styling>
            <div className="container">
                <h2>{name}</h2>
                <p>Birth year: {bday}</p>
                <p>Gender: {gender}</p>
                <h3>Appeared in: </h3>
                <ul>
                    {films.map((film) => {
                        return <li>{film}</li>
                    })}
                </ul>
            </div>
        </Styling>
    )
}