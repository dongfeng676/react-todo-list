import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Filter extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    filter: PropTypes.string,
    handleFilter: PropTypes.func
  }
  render(){
    const filter  = this.props.filter
    const color = filter.condition ? '#e6e6e6' : '#fff'

    return (
      <p
        style = {
          {
            background: color
          }
        }
        onClick={()=>this.props.handleFilter(filter.name)}
      >
        {filter.name}
      </p>
    )
  }
}
export default Filter