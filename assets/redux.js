const { createSlice, configureStore } = require("@reduxjs/toolkit");


/////////////////////////////////////////////////////////////////////////////////////////////////////
// alerts
/////////////////////////////////////////////////////////////////////////////////////////////////////
const alertSlice = createSlice({
  name: "alert",
  initialState: null,
  reducers: {
    setAlert: (state, action) => {
      //{ type: "alert/addAlert", payload:{ "color":"danger", "message":"Erreur 404"}}
      return { ...action.payload };
    },
  },
});

//petites fonction qui permettent de préciser uniquement le payload
export const { setAlert } = alertSlice.actions;

/////////////////////////////////////////////////////////////////////////////////////////////////////
// customers
/////////////////////////////////////////////////////////////////////////////////////////////////////

const customersSlice = createSlice({
  name: "customers",
  initialState: [],
  reducers: {
    setCustomers: (state, action) => {
        return { ...action.payload };
    }
  },
});

export const { setCustomers } = customersSlice.actions;

/////////////////////////////////////////////////////////////////////////////////////////////////////
// items
/////////////////////////////////////////////////////////////////////////////////////////////////////

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    setItem: (state, action) => {
        return { ...action.payload };
    },   
  },
});

export const { setItem, addItem } = itemsSlice.actions;

/////////////////////////////////////////////////////////////////////////////////////////////////////
// sessions
/////////////////////////////////////////////////////////////////////////////////////////////////////

const sessionsSlice = createSlice({
  name: "sessions",
  initialState: [],
  reducers: {
    setSessions: (state, action) => {
      return { ...action.payload };  
    }      
  },
});

export const { setSessions } = sessionsSlice.actions;

/////////////////////////////////////////////////////////////////////////////////////////////////////
// sessions Place
/////////////////////////////////////////////////////////////////////////////////////////////////////

const sessionPlacesSlice = createSlice({
  name: "session_places",
  initialState: [],
  reducers: {
    setSessionPlaces: (state, action) => {
      return { ...action.payload };  
    }      
  },
});

export const { setSessionPlaces } = sessionPlacesSlice.actions;

/////////////////////////////////////////////////////////////////////////////////////////////////////
// sessions Type
/////////////////////////////////////////////////////////////////////////////////////////////////////

const sessionsTypeSlice = createSlice({
  name: "sessions_type",
  initialState: [],
  reducers: {
    setSessionTypes: (state, action) => {
      return { ...action.payload };  
    }      
  },
});

export const { setSessionTypes } = sessionsTypeSlice.actions;

/////////////////////////////////////////////////////////////////////////////////////////////////////
// User
/////////////////////////////////////////////////////////////////////////////////////////////////////

const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    setUser: (state, action) => {
      return { ...action.payload };  
    }      
  },
});

export const { setUser } = UserSlice.actions;

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Bill
/////////////////////////////////////////////////////////////////////////////////////////////////////

const BillSlice = createSlice({
  name: "bill",
  initialState: [],
  reducers: {
    setBill: (state, action) => {
      return { ...action.payload };  
    }      
  },
});

export const { setBill } = BillSlice.actions;
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Create store
/////////////////////////////////////////////////////////////////////////////////////////////////////

export const store = configureStore({
  reducer: {
    customers: customersSlice.reducer,
    items: itemsSlice.reducer,
    alert: alertSlice.reducer,
    sessions: sessionsSlice.reducer,
    sessionPlaces: sessionPlacesSlice.reducer,
    sessionTypes: sessionsTypeSlice.reducer,
    user: UserSlice.reducer,
    bills: BillSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  })
});
