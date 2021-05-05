import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { User } from "./types"

// action asincrona con chiamata http
export const getUsers = createAsyncThunk<Array<User>, void, {}>(
    'users/getUsers',
    async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        // Inferred return type: Promise<Array<User>>
        return (await response.json()) as Array<User>
    }
)

// action sincrona
export const addCustomUser = createAction<User, 'addCustomUser'>('addCustomUser');