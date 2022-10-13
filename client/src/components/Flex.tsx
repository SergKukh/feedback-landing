import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface FlexProps {
    children: ReactNode,
    direction?: string,
    align?: string,
    justify?: string,
    margin?: string,
    height?: string,
    position?: string,
    top?: string,
    left?: string,
    right?: string,
    bottom?: string,
}

const StyledFlex = styled.div<FlexProps>`
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'stretch'};
justify-content: ${props => props.justify || 'stretch'};
margin: ${props => props.margin || '0'};
height: ${props => props.height || 'auto'};
position: ${props => props.position || 'static'};
top: ${({ top }) => top || 'auto'};
left: ${({ left }) => left || 'auto'};
right: ${({ right }) => right || 'auto'};
bottom: ${({ bottom }) => bottom || 'auto'};
`

const Flex: FC<FlexProps> = (props) => {
    return <StyledFlex {...props} />;
};

export default Flex;