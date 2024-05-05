import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { selectedId: number } = { selectedId: 0 };

export const SelectSlice = createSlice({
    name: 'selected',
    initialState,
    reducers: {
        selectContact: (state, action: PayloadAction<number>) => {
            // Mutate the state directly
            state.selectedId = action.payload;
            console.log("action.payload", state.selectedId);
        },
    }
})

export default SelectSlice.reducer;
export const { selectContact } = SelectSlice.actions;
