import React, { Component } from 'react';
import axios from 'axios'
import '../styles/celebrities.css'

class Celebrities extends Component {
    state = {
        celebrities: [],
        singleCeleb: null,
        allCeleb: []
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/person/popular?page=42&api_key=a75fdf772c785fc76d677ff3624da131')
        .then(res => {
            this.setState({celebrities: res.data.results, allCeleb: res.data.results})
            console.log(res.data.results)
        })
        .catch(err => console.log(err))
    }

    handleSingle = (value) => {
        this.setState({singleCeleb: value})
        console.log(value)
    }

    handleFilter = (e) => {
        this.setState({celebrities: this.state.allCeleb})
        let arr = [...this.state.allCeleb];

        let filteredArr = arr.filter(celeb => {
            return celeb.name.indexOf(e.target.value) > -1
        })

        this.setState({celebrities: filteredArr})
    }

    render() {
        let single = this.state.singleCeleb

        return (
            <div className="celebBody">
                <h1>Celebrities</h1>
                <input placeholder="Filter by name..." type="text" onChange={this.handleFilter}></input>
                <div className="celebPage">
                    <div className="celebContainer">
                        {this.state.celebrities.map((celeb, i) => (
                            <div
                            className={"celebBox " + (single && single.name === celeb.name ? "selected" : "")}
                            onClick={() => this.handleSingle(celeb)} key={i}>
                                <div>
                                    <img className="celebPP" src={"https://image.tmdb.org/t/p/w185"+celeb.profile_path}></img>
                                </div>
                                <p>{celeb.name}</p>
                            </div>
                        ))}
                    </div>

                    {this.state.singleCeleb && 
                    <div className="celebInfos">
                        <img src={"https://image.tmdb.org/t/p/w185"+single.profile_path}></img>
                        <h1>{single.name}</h1>
                        <h2>Known for</h2>
                        <ul className="listMovie">
                            {single.known_for.map((movie, i) => (
                                <li key={i}>
                                    <img className="moviePoster" src={"https://image.tmdb.org/t/p/w185"+movie.poster_path}></img> 
                                    <h3>{movie.original_name}</h3>
                                </li>
                            ))}
                        </ul>
                    </div>}
                </div>
            </div>
        );
    }
}

export default Celebrities;