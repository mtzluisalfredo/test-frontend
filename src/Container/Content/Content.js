/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Item } from '../../Components';
import './style.scss';
import * as counterActions from '../../actions';

class Content extends Component {
  render() {
    return (
      <div className='grid content shadow'>
        <Item name='Super Smash' urlImage='https://www.smashbros.com/assets_v2/img/top/hero02_en.jpg' />
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const actions = { ...counterActions };

export default connect(
  mapStateToProps,
  actions,
)(Content);
