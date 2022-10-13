import { FC, ReactNode } from 'react';
import styled from "styled-components";

interface CircleProps {
    color: string,
    opacity?: string,
    top?: string,
    left?: string,
    right?: string,
    bottom?: string,
    scale?: number,
    zIndex?: number,
    children?: ReactNode
}

const StyledCircle = styled.div<CircleProps>`
position: absolute;
border-radius: 50%;
width: 300px;
height: 300px;
background: ${({ color }) => color};
opacity: ${({ opacity }) => opacity || '100%'};
top: ${({ top }) => top || 'auto'};
left: ${({ left }) => left || 'auto'};
right: ${({ right }) => right || 'auto'};
bottom: ${({ bottom }) => bottom || 'auto'};
transform: scale(${({ scale }) => scale || 1});
z-index: ${({ zIndex }) => zIndex || 1};
`

const Circle: FC<CircleProps> = (props) => {
    return (
        <StyledCircle {...props}>
            {props.children}
        </StyledCircle>
    );
};

export default Circle;