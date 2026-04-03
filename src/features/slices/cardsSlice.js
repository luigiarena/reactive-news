import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cards: [],
        selectedCard: null,
        loading: true,
        error: null
    },
    reducers: {
        setCards: (state, action) => {
            state.cards = action.payload;
        },
        setSelectedCard: (state, action) => {
            state.selectedCard = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const { setCards, setSelectedCard, setLoading, setError } = cardsSlice.actions;
export default cardsSlice.reducer;