import React, {useEffect, useState} from 'react';
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import 'primeicons/primeicons.css';

const CardList = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {

        const api = axios.create({
            baseURL: "https://api.magicthegathering.io/v1/",
        });

        api.get("cards")
            .then((response) => setCards(response.data.cards))
            .catch((error) => console.error("Erro ao carregar os cards:", error));
    }, []);

    return (
        <div>
            <h2>Lista de Cards</h2>
            <DataTable value={cards}>
                <Column field="name" header="Name"></Column>
                <Column
                    field="url"
                    header="Details"
                    body={(rowData) => (
                        <a href={`/cards/${rowData.id}`}
                        target="_self" rel="noreferrer">
                        Details
                        </a>
                    )}
                ></Column>
            </DataTable>
        </div>
    );

};

export default CardList;
