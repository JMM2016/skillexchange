/**
 * Created by Miguel on 7/16/2017.
 */

import React, { Component } from 'react';
//import {Link} from 'react-router-dom'
import './RatingContainer.css';
import axios from 'axios';

//<script src="https://code.jquery.com/jquery.js"></script>

class RatingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }
  //
  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
    console.log( Object.values(this.state.toString()));
  }

  render() {
    return (
      <div>

        <form>
          <fieldset className="rating text-center">
            Select Rating <br/>
            <input type="radio" id="star5" name="rating" value="5"
                   checked={this.state.selectedOption === '5'}
                   onChange={this.handleOptionChange}/>
            <label className = "full" htmlFor="star5" title="Awesome - 5 stars"/>
            {/*<input type="radio" id="star4half" name="rating" value="4.5" />*/}
            {/*<label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"/>*/}
            <input type="radio" id="star4" name="rating" value="4"
                   checked={this.state.selectedOption === '4'}
                   onChange={this.handleOptionChange}/>
            <label className = "full" htmlFor="star4" title="Pretty good - 4 stars"/>
            {/*<input type="radio" id="star3half" name="rating" value="3.5" />*/}
            {/*<label className="half" htmlFor="star3half" title="Meh - 3.5 stars"/>*/}
            <input type="radio" id="star3" name="rating" value="3"
                   checked={this.state.selectedOption === '3'}
                   onChange={this.handleOptionChange}/>
            <label className = "full" htmlFor="star3" title="Meh - 3 stars"/>
            {/*<input type="radio" id="star2half" name="rating" value="2.5" />*/}
            {/*<label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"/>*/}
            <input type="radio" id="star2" name="rating" value="2"
                   checked={this.state.selectedOption === '2'}
                   onChange={this.handleOptionChange}/>
            <label className = "full" htmlFor="star2" title="Kinda bad - 2 stars"/>
            {/*<input type="radio" id="star1half" name="rating" value="1.5" />*/}
            {/*<label className="half" htmlFor="star1half" title="Meh - 1.5 stars"/>*/}
            <input type="radio" id="star1" name="rating" value="1"
                   checked={this.state.selectedOption === '1'}
                   onChange={this.handleOptionChange}/>
            <label className = "full" htmlFor="star1" title="Sucks big time - 1 star"/>
            {/*<input type="radio" id="starhalf" name="rating" value=".5" />*/}
            {/*<label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"/>*/}
          </fieldset>
        </form>

      </div>
    );
    }

    componentDidMount() {
      //axios.post(`http://exmaple.com/blog/${this.props.id}`)
      axios.post(`/`)
      //.then(response => this.setState(response.data))
    }
}

export default RatingContainer;