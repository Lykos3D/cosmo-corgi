import CostumeContext from './CostumeContextProvider.jsx';
import {useContext} from "react";

export default function Corgi () {
    const { costume } = useContext(CostumeContext);
    return(
        <>
        </>
    );
}