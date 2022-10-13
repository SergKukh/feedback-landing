import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FeedbackState {
    name: string,
    email: string,
    message: string
}

const initialState: FeedbackState = {
    name: '',
    email: '',
    message: ''
}

export const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },
        setMessage(state, action: PayloadAction<string>) {
            state.message = action.payload;
        }
    }
})

export default feedbackSlice.reducer;