import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lob/Grid'
import Row from 'react-bootstrap/lob/Row'
import Col from 'react-bootstrap/lob/Col'

import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <SayFullName name='KIT' surname='KITTY' link='vk.com' />
        <SayFullName name='Anna' surname='KITTY' link='facebook.com' />
        <SayFullName name='Zek' surname='KITTY' link='#' />
      </div>
    );
  }
}

function SayFullName (props) {
  return (
    <div>
      <h1> Мое имя {props.name}, фамилия {props.surname}</h1>
      <a href={props.link}> Ссылка на профиль </a>
    </div>
  )
}

export default App;
