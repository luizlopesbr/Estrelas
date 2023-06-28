import { Image,View , TouchableOpacity} from "react-native";

import estrela from "../assets/icons/star_1.png";
import estrelafill from "../assets/icons/star_2.png";
import { useState } from "react";

export default function Estrela({Ligada , pressionado}){

    return (
        <TouchableOpacity onPress={pressionado}>
            <Image source={Ligada == true ? estrelafill : estrela}/>
        </TouchableOpacity>
    );
}

