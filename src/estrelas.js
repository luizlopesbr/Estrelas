import { View } from "react-native";
import Estrela from "./estrela";
import { useState } from "react";

export default function Estrelas(){

    const [quantidade , SetQuantidade] = useState(0);

    const Stars = () => {
        let array = [];

        for (let i =0 ; i < 5 ; i++){
            array.push(
                <Estrela Ligada = {i < quantidade} 
                pressionado={()=> {
                    if (quantidade == i+1){
                        SetQuantidade (0)
                    }else{
                        SetQuantidade (i+1)
                    }
                    console.log("clicado" + i)}}
                />
                );
        }
        return array;
    }
    return (
        <View style ={{flexDirection:"row"}}>
            <Stars/>
        </View>
    );
}