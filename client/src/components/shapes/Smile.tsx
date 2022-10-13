import { FC } from 'react';
import styled from 'styled-components';
import smileTop from '../../assets/smile_top.svg';
import smileBottom from '../../assets/smile_bottom.svg';

interface SmileProps {
    top?: string,
    left?: string,
    right?: string,
    bottom?: string,
    scale?: number,
    rotate?: string
}

const StyledSmile = styled.div<SmileProps>`
position: absolute;
top: ${({ top }) => top || 'auto'};
left: ${({ left }) => left || 'auto'};
right: ${({ right }) => right || 'auto'};
bottom: ${({ bottom }) => bottom || 'auto'};
width: 50px;
height: 45px;
transform: scale(${({ scale }) => scale || 1})
    rotate(${({ rotate }) => rotate || '0deg'});

&>div {
    background-color: #000;
}

&>div:nth-child(1), &>div:nth-child(2) {
    background: url(${smileTop});
    width: 17px;
    height: 12px;
    position: absolute; 
}

&>div:nth-child(1) {
    top: 0;
    left: 0;
}

&>div:nth-child(2) {
    top: 0;
    left: 30px;
}

&>div:nth-child(3) {
    background: url(${smileBottom});
    width: 31px;
    height: 19px;
    position: absolute;
    top: 25px;
    left: 8px;
}
`
const Smile: FC<SmileProps> = (props) => {
    return (
        <StyledSmile {...props}>
            <div></div>
            <div></div>
            <div></div>
        </StyledSmile>
    );
};

export default Smile;