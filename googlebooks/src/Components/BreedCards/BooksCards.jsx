import React from "react";
import BreedsList from "../../Containers/BooksList";
import styles from "./BreedCards.module.scss";

export const BreedCards = ({ breed }) => {
    const url = breed.image
        ? breed.image.url
        : "https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg";

    return (
        <div>
            <p>{breed.name}</p>
            <p>{breed.origin}</p>
            <p>{breed.temperament}</p>
            <p>{breed.desc}</p>
            <img src={url}></img>
        </div>
    );
};
