import React, { Component } from 'react';
import './App.css';
import SecondPage from './SecondPage';

const slides = [{id: 1, url:"img/main_slide/cc-slide-1.png"}, {id: 2, url:"img/main_slide/cc-slide-2.png"}, {id: 3, url:"img/main_slide/cc-slide-3.png"}, {id: 4, url:"img/main_slide/cc-slide-4.png"}];
const slideList = slides.map((slide) => <li key={slide.id.toString()} className="slide-img"><img src={slide.url} alt="slide is missing..." /></li>);

class MainBeginButton extends Component {
    constructor(props) {
        super(props);
        this.state = {showPage: this.props.showPage};
    }

    render() {
        console.log(this.props.showPage)
        return (
            <div onClick={this.props.handleClick} id="save-btn" className="save-button"> press here to begin {this.state.showPage} { } </div>
        );
    }
}

class MainSlide extends Component {
    render() {

        return (
            <div id="saver" className="saver">

                <div id="slider">
                    <ul>
                        { slideList }
                    </ul>
                </div>


                <div className="side-box-text">Cross Country</div>

                <div className="side-title"></div>
                <div className="side-title-arrow"> </div>
                <MainBeginButton handleClick={this.props.handleClick} showPage={this.props.mainShowPage} />
            </div>
        );
    }
}


class MainPage extends Component {

    render() {
        return (
            <MainSlide handleClick={this.props.handleClick} mainShowPage={this.props.mainShowPage}></MainSlide>
        );
    }
}

class MasterPage extends Component {

    constructor(props) {
        super(props);
        this.state = {showPage: this.props.showThisPage, showProfile: this.props.showProfile};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleProfileClick = this.handleProfileClick.bind(this);
    }


    handleClick() {
        var newState;
        if(this.state.showPage === "Main")
        {
            newState = "Second";
        }
        else
        {
            newState = "Main"
        }

        this.setState(prevState => ({
            showPage: newState
        }));
        console.log("Changing state");
    }

    handleProfileClick() {
        var newState;
        if(this.state.showProfile === "Yes")
        {
            newState = "No";
        }
        else
        {
            newState = "Yes";
        }

        this.setState(prevState => ({
            showProfile: newState
        }));
        console.log("Click Profile!");
        console.log(this.state.ShowProfile);
    }

    render() {
        const showThisPage = this.state.showPage;
        if(showThisPage === "Main")
        {
            return <MainPage handleClick={this.handleClick} mainShowPage={this.state.showPage}/>
        }
        else
        {
            return <SecondPage handleClick={this.handleClick}/>
        }

    }
}

export default MasterPage;