import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import { RootState, AppThunk } from "../app/store"
// import { fetchCount } from "./counterAPI"

export interface UserState {
  title: string
  firstname: string
  lastname: string
  birthdate: Date
  nationality: string
  id_number: string | null
  gender: string
  mobile_number: string
  passport_number: string | null
  expected_salary: number
  isValid: boolean
}

const initialState = {
  title: localStorage.getItem("title") || "",
  firstname: localStorage.getItem("firstname") || "",
  lastname: localStorage.getItem("lastname") || "",
  birthdate: new Date(),
  nationality: localStorage.getItem("nationality") || "",
  id_number: localStorage.getItem("id_number") || "",
  gender: localStorage.getItem("gender") || "",
  mobile_number: localStorage.getItem("mobile_number") || "",
  passport_number: localStorage.getItem("passport_number") || "",
  expected_salary: Number(localStorage.getItem("expected_salary")) || 0,
  isValid: false,
  // user: {
  //   user: localStorage.getItem("user")? JSON.parse(localStorage.getItem("user"))
  //     : [],
  // }
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<Partial<UserState>>) => {
      //check isValid after every input
      function checkValid() {
        const {
          title,
          firstname,
          lastname,
          nationality,
          gender,
          // mobile_number,
          // passport_number,
          // id_number,
          expected_salary,
        } = state

        state.isValid =
          title.length > 0 &&
          firstname.length > 0 &&
          lastname.length > 0 &&
          nationality.length > 0 &&
          gender.length > 0 &&
          // mobile_number.length > 0 &&
          // passport_number.length > 0 &&
          // id_number.length > 0 &&
          expected_salary > 0
      }
      Object.assign(state, action.payload)
      checkValid()
    },
    resetUser: (state) => {
      state = initialState
    },
  },
})

export const { updateUser, resetUser } = userSlice.actions
export default userSlice.reducer
