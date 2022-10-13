import { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { FeedbackService } from '../api/FeedbackService';
import { useAction, useAppSelector } from '../hooks/redux';
import Flex from './Flex';
import Cloud from './shapes/Cloud';
import Button from './UI/Button';
import InputText from './UI/InputText';

const StyledForm = styled.form`
display: flex;
flex-direction: column;
min-width: 34.8125rem;
margin-left: 9.375rem;
z-index: 10;
position: relative;
&>input {
    margin-bottom: 0.5rem;
}
&>textarea {
    margin-bottom: 1.4375rem;
}

@media (max-width: 1090px) {
    margin-left: 0;
}

@media (max-width: 590px) {
    min-width: 32rem;
}

@media (max-width: 530px) {
    min-width: 29rem;
}

@media (max-width: 480px) {
    min-width: 26rem;
}

@media (max-width: 430px) {
    min-width: 23rem;
}

@media (max-width: 380px) {
    min-width: 20rem;
}
`

const StyledTitle = styled.h1`
font-size: 2.5rem;
font-weight: 400;
margin-bottom: 1rem;
`

interface StyledInformationProps {
    color: string;
}

const StyledInformation = styled.div<StyledInformationProps>`
    margin-left: 15px;
    color: ${(props) => props.color};
`

const FeedbackForm = () => {
    const { name, email, message } = useAppSelector(state => state.feedbackReducer);
    const { setName, setEmail, setMessage, clearInputs } = useAction();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const submit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(async () => {
            try {
                await FeedbackService.sendFeedback(name, email, message);
                if (isError) {
                    setIsError(false);
                }
                setIsSuccess(true);
                clearInputs();
            } catch (error) {
                setIsError(true);
                setIsSuccess(false);
            } finally {
                setIsLoading(false);
            }
        }, 1000)
    }

    return (
        <StyledForm onSubmit={submit}>
            <StyledTitle>Reach out to us!</StyledTitle>
            <InputText placeholder='Your name*' required={true}
                value={name} onChange={(e) => setName(e.target.value)} />
            <InputText placeholder='Your e-mail*' required={true}
                value={email} type='email'
                onChange={(e) => setEmail(e.target.value)} />
            <InputText placeholder='Your message*' isTextarea={true}
                required={true} rows={5}
                value={message} onChange={(e) => setMessage(e.target.value)} />
            <Flex align='center'>
                <Button loading={isLoading}>Send message</Button>
                {isSuccess && <StyledInformation color='#008000'>Successfully sent, thank you</StyledInformation>}
                {isError && <StyledInformation color='#EE4B2B'>Error, please try again</StyledInformation>}
            </Flex>
            <Cloud bottom='-60px' left='-50px' scale={0.9} />
            <Cloud bottom='0%' right='10%' scale={1.2} />
        </StyledForm>
    );
};

export default FeedbackForm;