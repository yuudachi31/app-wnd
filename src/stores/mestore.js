import React, { createContext, useState } from "react";
import MeData from "../json/all.json"


export const StoreContext = createContext();

// Make a Provider
export const StoreProvider = ({ children }) => {  
  const [me, setMe] = useState(MeData );
  const [bottle, setbottle] = useState(0 );
  const [water, setwater] = useState(0 );
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [initialNavigationState, setInitialNavigationState] =useState();
  const [islogin,setislogin] =useState(false);
  const [FBLOid,setFBLOid]=useState(null);
  const [HEIGHT,setHEIGHT]=useState(null);
  const [Weight,setWeight]=useState(null);
  const [Fat,setFat]=useState(null);
  const [heat,setheat]=useState(0);
  const [CaoWat,setCaoWat]=useState(0);
  const [EgWh,setEgWh]=useState(0);
  const [Ffat,setFfat]=useState(0);
  const store = {
    meState: [me, setMe],
    bottleState:[bottle, setbottle],
    waterState:[water, setwater],
    FBLOidState:[FBLOid,setFBLOid],
    loginState:[islogin,setislogin],
    HEIGHTState: [HEIGHT,setHEIGHT],
    WeightState:[Weight,setWeight],
    heatState:[heat,setheat],
    CaoWatState:[CaoWat,setCaoWat],
    EgWhState:[EgWh,setEgWh],
    FfatState:[Ffat,setFfat],
    FatState:[Fat,setFat],
    LoadingCompleteState:[isLoadingComplete, setLoadingComplete],
    NavigationState: [initialNavigationState, setInitialNavigationState]
  };
  return (
   <StoreContext.Provider value={store}>
      {children}
   </StoreContext.Provider>
  );
};

