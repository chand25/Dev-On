import React, { Component } from 'react';


function withProps(Component, props){
  return function(matchProps){
    return < Component {...props} {...matchProps} />
  }
}


export default withProps;
