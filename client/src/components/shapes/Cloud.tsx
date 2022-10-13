import { FC } from 'react';
import styled from 'styled-components';
import cloud from '../../assets/cloud.svg';

interface CloudProps {
    top?: string,
    left?: string,
    right?: string,
    bottom?: string,
    scale?: number
}

const StyledCloud = styled.div<CloudProps>`
position: absolute;
width: 170px;
height: 129px;
z-index: 1;
background: url(${cloud});
top: ${({ top }) => top || 'auto'};
left: ${({ left }) => left || 'auto'};
right: ${({ right }) => right || 'auto'};
bottom: ${({ bottom }) => bottom || 'auto'}; 
transform: scale(${({ scale }) => scale || 1});
`

const Cloud: FC<CloudProps> = (props) => {
    return (
        <StyledCloud {...props} />
    );
};

export default Cloud;