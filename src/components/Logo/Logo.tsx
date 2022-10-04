import React, { Component } from 'react'

import searchImg from "../../Assets/Images/search.png";

import { LogoContainer } from "./LogoStyles";

type Props = {}

type State = {}

export default class Logo extends Component<Props, State> {
  state = {}

  render() {
    return (
      <LogoContainer src={searchImg} alt="Logo"/>
    )
  }
}