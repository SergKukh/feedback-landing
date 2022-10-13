import { AppDispatch } from "..";
import { feedbackSlice } from "./feedbackSlice";

export default {
    setName: (name: string) => (dispatch: AppDispatch) => {
        dispatch(feedbackSlice.actions.setName(name));
    },
    setEmail: (email: string) => (dispatch: AppDispatch) => {
        dispatch(feedbackSlice.actions.setEmail(email));
    },
    setMessage: (message: string) => (dispatch: AppDispatch) => {
        dispatch(feedbackSlice.actions.setMessage(message));
    },
    clearInputs: () => (dispatch: AppDispatch) => {
        dispatch(feedbackSlice.actions.setName(''));
        dispatch(feedbackSlice.actions.setEmail(''));
        dispatch(feedbackSlice.actions.setMessage(''));
    }
}