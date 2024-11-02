import {createContext, useState} from "react";

const CostumeContext = createContext();
export default CostumeContext;

export function CostumeContextProvider({ children }) {
    const [costume, setCostume] = useState(null); // ADD IN INITIAL STATE HERE
    return(
        <CostumeContext.Provider value={[costume, setCostume]}>
            {children}
        </CostumeContext.Provider>
    )
}