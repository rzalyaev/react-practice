import React, {useState} from "react";
import { action } from "@storybook/addon-actions";
import {Rating, RatingType} from "./Rating";

export default {
    title: 'Rating',
    component: Rating,
}

export const EmptyRating = () => <Rating rating={0} setRating={x=>x}/>;
export const Rating1 = () => <Rating rating={1} setRating={x=>x}/>;
export const Rating2 = () => <Rating rating={2} setRating={x=>x}/>;
export const Rating3 = () => <Rating rating={3} setRating={x=>x}/>;
export const Rating4 = () => <Rating rating={4} setRating={x=>x}/>;
export const Rating5 = () => <Rating rating={5} setRating={x=>x}/>;
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingType>(3);
    return <Rating rating={rating} setRating={setRating}/>;
}