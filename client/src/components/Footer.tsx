import styled from 'styled-components';
import useMediaQuery from '../hooks/useMediaQuery';
import Circle from './shapes/Circle';
import { FacebookIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './shapes/footerIcons';
import Smile from './shapes/Smile';

const StyledFooter = styled.footer`
background: #FAFAFA;
border: 1px solid #D8D8D8;
z-index: 2;
height: 200px;
position: relative;
`

const SocialContainer = styled.div`
display: flex;
position: absolute;
left: 375px;
top: 40%;
&>a {
    margin: 0 1.3rem 0 0;
}

@media (max-width: 840px) {
    top: 50%;
    transform: translateY(-50%);
    left: 30px;
    flex-direction: column;

    &>a {
        margin: 0 0 1rem 0;
        display: flex;
        align-items: center;
        transform: scale(1.3);
        text-decoration: none;
        color: #696969;
        font-size: 0.9rem;

        &>svg {
            width: 20px;
        }

        &>span {
            margin-left: 0.7rem;    
        }
    }

    &>a:hover {
        color: #A9A9A9;
        &>svg {
            fill: #A9A9A9;
        }
    }
}
`

const SmileContainer = styled.div`
position: absolute;
height: 97px;
width: 78px;
background: #46EBB0;
border-bottom-left-radius: 39px 39px;
border-bottom-right-radius: 39px 39px;
top: -1px;
right: 200px;

@media (max-width: 480px) {
    right: 100px;
}

@media (max-width: 360px) {
    right: 70px;
}
`

const Footer = () => {
    const matches840px = useMediaQuery('(max-width: 840px)');

    return (
        <StyledFooter>
            <SocialContainer>
                <a href='https://www.linkedin.com/company/zenbit-tech' target='_blank' rel='noopener noreferrer'>
                    <LinkedInIcon />
                    {matches840px && <span>LinkedIn</span>}
                </a>
                <a href='https://twitter.com/zen_bit' target='_blank' rel='noopener noreferrer'>
                    <TwitterIcon />
                    {matches840px && <span>Twitter</span>}
                </a>
                <a href='https://www.facebook.com/zenBitTech' target='_blank' rel='noopener noreferrer'>
                    <FacebookIcon />
                    {matches840px && <span>Facebook</span>}
                </a>
                <a href='https://www.pinterest.com' target='_blank' rel='noopener noreferrer'>
                    <PinterestIcon />
                    {matches840px && <span>Pinterest</span>}
                </a>
            </SocialContainer>
            {!matches840px && <Circle color='#F472B7' bottom='-67px' left='15px' scale={0.72}>
                <Smile top='40%' left='50px' rotate='-45deg' scale={1.2} />
            </Circle>}
            <Circle color='#FAD34F' top='-35px' right='-125px' scale={0.3}>
                <Smile top='20%' right='120px' rotate='-45deg' scale={1.3} />
            </Circle>
            <SmileContainer>
                <Smile bottom='12px' left='10px' rotate='180deg' scale={0.55} />
            </SmileContainer>
        </StyledFooter>
    );
};

export default Footer;