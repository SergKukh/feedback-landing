import styled from 'styled-components';
import FeedbackForm from './FeedbackForm';
import Map from './Map';
import Circle from './shapes/Circle';
import Cloud from './shapes/Cloud';
import Smile from './shapes/Smile';

const StyledMain = styled.main`
position: relative;
z-index: 2;
min-height: calc(100vh - 200px);
display: flex;
align-items: center;
padding-bottom: 10px;

@media (max-width: 1090px) {
    justify-content: center;
}
`

const Background = styled.div`
position: absolute;
z-index: 9;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: #000;
opacity: 0;

@media (max-width: 1090px) {
    opacity: 15%;
}
`

const Main = () => {
    return (
        <StyledMain>
            <FeedbackForm />
            <Map />
            <Circle color='#FAD34F' top='-70px' left='-70px' scale={0.25} zIndex={3}>
                <Smile top='60px' left='140px' scale={1.2} rotate='-45deg' />
            </Circle>
            <Circle color='#FAD34F' opacity='10%' top='-70px' left='50%' scale={0.25} />
            <Cloud top='50%' right='40px' scale={1.1} />
            <Cloud top='70%' right='28%' scale={0.9} />
            <Cloud bottom='-2%' left='300px' scale={1.6} />
            <Cloud top='20%' right='30%' scale={1.2} />
            <Cloud top='40%' left='50%' scale={0.8} />
            <Cloud top='20%' left='45%' scale={0.6} />
            <Cloud top='25%' left='0%' scale={1.6} />
            <Cloud top='55%' left='-50px' scale={1.1} />
            <Background />
        </StyledMain>
    );
};

export default Main;