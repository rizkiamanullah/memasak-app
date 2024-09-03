import React, { useState } from "react";
import { Pressable, TextInput, View } from "react-native";

const Inputs = ({ onFavoriteFood }) => {
    const [food, setFood] = useState('');
    const [favorite, setFavorite] = useState(false);

    const favoriteFood = () => {
        onFavoriteFood({ food, favorite });
        setFood('');
        setFavorite(false);
    }
    return (
        <View>
            <TextInput
                placeholder="Food Name"
                value={food}
                onChangeText={setFood}
            ></TextInput>
            <Pressable
                onPress={setFavorite}
            >
                <Image></Image>
            </Pressable>
        </View>
    )
}

export default Inputs;