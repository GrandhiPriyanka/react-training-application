import React, { Component } from "react";

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchVal: this.props.initialValue
        }
    }


    onInputChange = (e) => {
        this.setState({
            searchVal: e.target.value
        });
    }
    render() {

        return (
            <div className="formContainer">
                <input type="text" placeholder="What do you want to search" className="searchInput" value={this.state.searchVal} onChange={this.onInputChange}
                    onKeyDown={event => {
                        if (event.key === 'Enter') {
                            this.props.onSearchValue(this.state.searchVal)
                        }
                    }} />
                <div className="buttonContainerClass">
                    <button className="buttonClass" onClick={() =>this.props.onSearchValue(this.state.searchVal)}>Search</button>
                </div>
            </div>
        );
    }
}
export default SearchForm;