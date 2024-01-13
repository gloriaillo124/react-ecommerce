import logo from './logo.svg';
import './App.css';
import Header from './composant/Header/Header';
import Container from './composant/Container/Container';
import { Fragment } from 'react';
import Footer from './composant/Footer/Footer';

var App = () =>{
  const products = [
    {
        _id:1,
        name: "Formation React js",
        price: 5999,
        soldPrice: 2999,
        category: 'Frontend' ,
        status: 'Sold',
        imageUrl: 'images/chaussure1.jpg'
    },
    {
        _id:2,
        name: "Formation Vue js",
        price: 6999,
        soldPrice: 2999,
        category: 'Frontend' ,
        status: 'Sold',
        imageUrl: 'images/chaussure.jpeg'
    },
    {
        _id:3,
        name: "Formation Angular",
        price: 4999,
        soldPrice: 2999,
        category: 'Frontend' ,
        status: 'Sold',
        imageUrl: 'images/chaussure1.jpg'
    },
    {
        _id:4,
        name: "Formation laravel",
        price: 4999,
        soldPrice: 2999,
        category: 'Frontend' ,
        status: 'Sold',
        imageUrl: 'images/chaussure.jpeg'
    },
]
  return <Fragment>
            <Header/>   
            <Container products={products} />   
            <Footer/> 
         </Fragment> 
}

export default App;
