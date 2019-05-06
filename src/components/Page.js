import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Page extends Component {
  onBtnClick = e => {
    console.log(e.currentTarget.innerText)
    const year = +e.target.innerText
    this.props.setYearAction(year)
  }
  render() {
    const { year, photos } = this.props

    return (
      <div>
        <div>
          <button onClick={this.onBtnClick}>2018</button>
          <button onClick={this.onBtnClick}>2017</button>
          <button onClick={this.onBtnClick}>2016</button>
          <button onClick={this.onBtnClick}>2015</button>
          <button onClick={this.onBtnClick}>2014</button>
        </div>
        <p>
          У тебя {photos.length} фото за {year} год
        </p>
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYearAction: PropTypes.func.isRequired,
}
