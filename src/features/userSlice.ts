import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { nanoid } from "nanoid"

export interface UserState {
  id: string
  title: string
  firstname: string
  lastname: string
  birthdate: string
  nationality: string
  id_number: string | null
  gender: string
  mobile_number: string
  passport_number: string | null
  expected_salary: number
}

const initialState = {
  id: "",
  title: "",
  firstname: "",
  lastname: "",
  birthdate: "",
  nationality: "",
  id_number: "",
  gender: "",
  mobile_number: "",
  passport_number: "",
  expected_salary: 0,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserForm: (state, action: PayloadAction<Partial<UserState>>) => {
      state.id = nanoid()
      if (action.payload.birthdate) {
        state.birthdate = action.payload.birthdate.toString()
      }
      Object.assign(state, action.payload)
    },
    resetUserForm: () => {
      return initialState
    },
  },
})

export const { updateUserForm, resetUserForm } = userSlice.actions
export default userSlice.reducer
