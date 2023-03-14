import { createSlice } from "@reduxjs/toolkit";

const initialState = {favPackages:[],npmList:[],deleteitem:"",search:"reactjs"};

export const favPackageSlice = createSlice({
    name:" Fav Package Slice",
    initialState,
    reducers:{
        addFav:(state,action) =>{
            state.favPackages = [...state.favPackages,action.payload]
        },

        deleteFav: (state,action) => {
            state.favPackages = state.favPackages.filter(item => item.name !== action.payload)
        },

        updateFav: (state, action) => {
            const findFav = state.favPackages.filter(item => item.name === action.payload.name)

            findFav.comment = action.payload.name;
            state.favPackages = [...state.favPackages.filter(item => item.name !== action.payload.name),action.payload]
        },
        updateNpmList: (state,action) => {
            state.npmList = action.payload
        },
        itemDelete:(state,action) => {
            state.deleteitem = action.payload
        },
        updateSearch:(state,action) => {
            state.search = action.payload
        }
    }
});

export const getData = (search) => {
    return async (dispatch) =>{
        
        const fetchData = async()=>{
           const response = await fetch(`https://api.npms.io/v2/search?q=${search}`);

           if(!response.ok){
            throw new Error("Data could not fetch");
           }
           const data = response.json();
           
           return data;
        }
        try {
            const product = await fetchData();
            const data =  await product.results.map((ele) => {
                return {
                    value: ele.package.name,
                    label: ele.package.name,
                };
            });
            dispatch(npmActions.updateNpmList(data))
        } catch (error) {
            console.log(error);
        }
    }
}

export const npmActions = favPackageSlice.actions;