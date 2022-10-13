import styled from 'styled-components';
import mapImage from '../assets/map.png';
import Circle from './shapes/Circle';
import Smile from './shapes/Smile';

const StyledMap = styled.div`
background: url(${mapImage});
background-repeat: no-repeat;
background-position: left bottom;
height: 61rem;
width: 61rem;
border-radius: 50%;
position: absolute;
top: -3.25rem;
right: -21.875rem;
z-index: 2;

@media (max-height: 1120px) {
    transform: scale(0.9);
    top: -5.95rem;
    right: -22.7rem;
}

@media (max-height: 1035px) {
    transform: scale(0.8);
    top: -8.7rem;
    right: -23.6rem;
}

@media (max-height: 940px) {
    transform: scale(0.7);
    top: -11.5rem;
    right: -24.5rem;
}

@media (max-width: 660px) {
    transform: scale(0.6);
    top: -14.2rem;
    right: -25.3rem;
}

@media (max-width: 425px) {
    transform: scale(0.5);
    top: -16.8rem;
    right: -26.1rem;
}
`

const Map = () => {
    return <StyledMap>
        <Circle color='#FAD34F' top='50%' left='-15%' scale={0.4} zIndex={2}>
            <Smile top='200px' left='190px' scale={2} />
        </Circle>
        <Circle color='#F472B7' top='60%' left='-5%' scale={0.6}>
            <Smile top='120px' left='60px' scale={1.5} rotate='-45deg' />
        </Circle>
    </StyledMap>;
};

export default Map;