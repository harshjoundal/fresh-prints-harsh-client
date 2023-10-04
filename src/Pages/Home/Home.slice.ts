import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser } from "./Home.api";
import { message } from "antd";

const initialState = {
    user: {},
    loading:false
}

export const getGithubUser = createAsyncThunk(
    "homeslice/getGithubUser",
    async (user:string) =>{
        let res:any = await getUser(user)
       
        if (!localStorage.getItem("gitHubhistory")) {
          localStorage.setItem(
            "gitHubhistory",
            JSON.stringify([
              {
                searchTerm: user,
                data: res?.data ? res.data : {},
              },
            ])
          );
        } else {
          let History: any = localStorage.getItem("gitHubhistory");
          History = JSON.parse(History);

          let newData = [
            ...History,
            {
              searchTerm: user,
              data: res?.data ? res.data : {},
            },
          ];
          localStorage.setItem("gitHubhistory", JSON.stringify(newData));
        }
        
        return res;
    }
)

export const HomeSlice = createSlice({
    name:"homeslice",
    initialState,
    reducers:{


    },
    extraReducers:builder => {
        builder
        .addCase(getGithubUser.pending,(state)=>{
            state.loading = true
            state.user = {};
        })
        .addCase(getGithubUser.fulfilled,(state,action:any)=>{
            state.loading = false;
            if(action.payload?.data){
                state.user = action.payload?.data
            }
        })
        .addCase(getGithubUser.rejected,(state)=>{
            state.loading = false
            message.error("Something went wrong!")
        })
        
    }
})

export const seleteHome = (state:any) => state.homeslice
export default HomeSlice.reducer