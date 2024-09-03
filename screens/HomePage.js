import React, { useState } from "react";
import { View } from "react-native";

import Inputs from "../components/Inputs";

const HomePage = () => {
    const [favorite, setFavorite] = useState([]);

    const addFavorite = (favorite) => {
        setFavorite([...favorite, ])
    }
}