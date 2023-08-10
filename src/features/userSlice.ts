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
  isValid: boolean
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
  isValid: false,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserForm: (state, action: PayloadAction<Partial<UserState>>) => {
      //check isValid after every input
      function checkValid() {
        state.isValid =
          state.title.length > 0 &&
          state.firstname.length > 0 &&
          state.lastname.length > 0 &&
          state.birthdate.length > 0 &&
          state.nationality.length > 0 &&
          state.gender.length > 0 &&
          state.mobile_number.length > 0 &&
          state.expected_salary > 0
      }

      state.id = nanoid()
      if (action.payload.birthdate) {
        state.birthdate = action.payload.birthdate.toString() // Convert Date to ISO string
      }
      checkValid()
      Object.assign(state, action.payload)
    },
    resetUserForm: (state) => {
      state = initialState
    },
  },
})

export const { updateUserForm, resetUserForm } = userSlice.actions
export default userSlice.reducer
