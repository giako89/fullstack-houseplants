import React, {Component} from "react";

import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';

import alocasia from './images/alocasia.jpeg';
import alocasiaGageana from './images/alocasiaGageana.jpeg';
import calathea from './images/calathea.jpeg';
import ludisia from './images/ludisia.jpg';
import monstera from './images/monstera.jpeg';
import pilea from './images/pilea.jpeg';
import sansevieria from './images/sansevieria.jpeg';

class App extends Component {
    state = {
        cards: [
            {id: 0, nome: "Alocasia", prezzo: 25, immagine: alocasia, quantità: 0},
            {id: 1, nome: "Alocasia Gageana", prezzo: 28.55, immagine: alocasiaGageana, quantità: 0},
            {id: 2, nome: "Calathea", prezzo: 35, immagine: calathea, quantità: 0},
            {id: 3, nome: "Ludisia", prezzo: 33.55, immagine: ludisia, quantità: 0},
            {id: 4, nome: "Monstera", prezzo: 48.55, immagine: monstera, quantità: 0},
            {id: 5, nome: "Pilea", prezzo: 32, immagine: pilea, quantità: 0},
            {id: 6, nome: "Sansevieria", prezzo: 27, immagine: sansevieria, quantità: 0},
        ]
    }

    handleDelete = cardId => {
        const cards = this.state.cards.filter(card => card.id !== cardId);
        this.setState({ cards });
    }

    handleIncrement = card => {
        const cards = [...this.state.cards];
        const id = cards.indexOf(card);
        cards[id] = {...card};
        cards[id].quantità++;
        this.setState({ cards });
    }

    render() {
        return (
            <>
                <Navbar/>
                <div className='container'>
                    <h1>Ordina la tua pianta?</h1>
                    <hr/>
                    <div className='row'>
                        {this.state.cards.map(card => (
                            <Card
                                key={card.id}
                                onDelete={this.handleDelete}
                                onIncrement={this.handleIncrement}
                                card={card} />
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default App;

