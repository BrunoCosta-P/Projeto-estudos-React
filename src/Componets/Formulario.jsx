import React, { Component } from 'react';

export default class Formulario extends Component { 
    render() {
        return (
            <form>
                <input type="text" placeholder="Titulo"/>
                <textarea placeholder="Escreva a sua nota"/>
                <button>Criar Nota</button>
            </form>
        )
    }
}