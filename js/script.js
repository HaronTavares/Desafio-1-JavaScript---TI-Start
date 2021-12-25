import {criarLista, addNaCesta} from './modulo.js';

const listaDeProdutos = document.querySelector('#produtos');
const listaDeFrutas = [
    {
        nome: 'Mamão Papaia',
        preco: 3.70
    },
    {
        nome: 'Laranja',
        preco: 3.50
    },
    {
        nome: 'Manga',
        preco: 5.20
    },
    {
        nome: 'Melão',
        preco: 4.50
    },
    {
        nome: 'Melancia',
        preco: 9.90
    }
];

criarLista(listaDeFrutas, listaDeProdutos);

const produtos = document.querySelectorAll('#produtos > li')
const total = document.querySelector('#mostraTotalCompra');

addNaCesta(produtos, 'cestaDoCliente', total);