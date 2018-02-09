import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Filter from './Filter'
class FilterList extends Component {
  static propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string),
    handleFilter: PropTypes.func
  }
  render(){
    return(
      <div class="filter">
        <p>过滤条件: </p>
        <div class="filter_list">
          {this.props.filters.map((filter, index)=>
            <Filter key={index} filter={filter} handleFilter={this.props.handleFilter}/>
          )}
        </div>
      </div>
    )
  }
}
export default FilterList