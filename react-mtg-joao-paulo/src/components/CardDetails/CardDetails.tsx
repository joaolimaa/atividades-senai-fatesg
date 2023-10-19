import React, {FC, useEffect, useRef, useState} from 'react';
import {ModelCard} from "../../model/card-model";
import { Card } from "primereact/card";
import {useParams} from "react-router-dom";
import axios from "axios";
import { InputText } from 'primereact/inputtext';

const CardDetails = () => {
    const [card, setCard] = useState<ModelCard>();
    const { id } = useParams<{id: string}>();

    const [loading, setLoading] = useState(false);

    const buttonRef = useRef(null);

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    function loadPage() {
        axios
            .get(`https://api.magicthegathering.io/v1/cards/${id}`)
            .then((response) => setCard(response.data));
    }

    useEffect(() => {
        loadPage()
    },[]);

    if (!card) return null;

    return (
        <div>
      <Card title={card.card.name}>
        <img src={card.card.imageUrl} alt={card.card.name} />
        <div>
            <label htmlFor="name">Name: </label>
            <InputText
              id="name"
              value={card.card.name}
              disabled 
            />
          </div>
          <div>
            <label htmlFor="imageUrl">Image URL: </label>
            <InputText
              id="imageUrl"
              value={card.card.imageUrl}
              disabled 
            />
          </div>
          <div>
            <label htmlFor="type">Type: </label>
            <InputText
              id="type"
              value={card.card.type}
              disabled 
            />
          </div>
          <div>
            <label htmlFor="rarity">Rarity: </label>
            <InputText
              id="rarity"
              value={card.card.rarity}
              disabled 
            />
          </div>
          <div>
            <label htmlFor="type">Type: </label>
            <InputText
              id="type"
              value={card.card.type}
              disabled 
            />
          </div>
      </Card>
    </div>
    )

}

export default CardDetails;
