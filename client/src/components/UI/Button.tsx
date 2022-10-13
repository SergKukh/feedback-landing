import { ReactNode, FC } from 'react';
import styled, { keyframes } from 'styled-components';

interface ButtonProps {
    children: ReactNode,
    loading?: boolean
}

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
flex-flow: row wrap;
z-index: 15;
`

const StyledButton = styled.button`
background: #FAD34F;
border: none;
cursor: pointer;
padding: 1.75rem 3.25rem;
border-radius: 31.25rem;
position: relative;
`
const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
}`

interface LoadingProps {
    loading: number
}

const Spinner = styled.div<LoadingProps>`
border: 4px solid rgba(255, 255, 255, 0.5);
border-radius: 50%;
border-top-color: white;
opacity: ${({ loading }) => loading ? 1 : 0};
position: absolute;
left: 25%;
right: 25%;
top: 25%;
bottom: 25%;
margin: auto;
width: 2rem;
height: 2rem;
transition: opacity 200ms;
animation: ${rotate} 1s linear;
animation-iteration-count: infinite;
transition-delay: ${({ loading }) => loading ? '200ms' : '0ms'}
`

const Text = styled.p<LoadingProps>`
font-size: 1.125rem;
color: #fff;
transition-delay: ${({ loading }) => loading ? '0ms' : '200ms'};
width: 100%;
opacity: ${({ loading }) => loading ? 0 : 1};
`

const Button: FC<ButtonProps> = ({ children, loading }) => {
    return (
        <ButtonContainer>
            <StyledButton>
                <Spinner loading={loading ? 1 : 0} />
                <Text loading={loading ? 1 : 0}>
                    {children}
                </Text>
            </StyledButton>
        </ButtonContainer>
    );
};

export default Button;