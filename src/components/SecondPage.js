import React, { Component } from 'react';
import './App.css';

const skiiers = [
    {id: 1, name:"Junior Bounous", profile_img:"img/profile_img/profile-junior.png", icon_img:"img/profile_icons/junior-icon.png", bio:"Junior Bounous won the National Cross-Country Championship in 1947, but is most remembered as an inspired ski instructor and founding member of the Professional Ski Instructors of America (PSIA). Bounous's contributions to the profession as an instructor and writer of articles and books earned him a place in the National Ski Hall of Fame in 1996."},
    {id: 2, name:"Alf Engen", profile_img:"img/profile_img/profile-alf.png", icon_img:"img/profile_icons/alf-icon.png", bio:"Known for his expertise in ski jumping and alpine skiing technique, Alf Engen also excelled in cross-country skiing. Alf found that there was no better way to keep the body in good physical and mental shape than to cross-country ski in Alta's Albion Basin. Alf was almost always at the top of the field in national and international cross-country and Nordic combined competitions. Alf Engen was a true Nordic skiing competitor, enjoying all disciplines of the sport."},
    {id: 3, name:"Corey Engen", profile_img:"img/profile_img/profile-corey.png", icon_img:"img/profile_icons/corey-icon.png", bio:"Corey Engen, at age 17, emigrated from Norway to Salt Lake City, and joined his brothers Alf and Sverre. Corey excelled in cross-country and other skiing disciplines, winning more than 500 medals and trophies throughout his career. Later, he served as Captain of the 1948 U.S. Olympic Nordic Team. He continued to amaze fans by winning a multitude of awards as a senior racer. Corey was inducted into the National Ski Hall of Fame in 1973, completing the Engen brothers trio of skiing success."},
    {id: 4, name:"Ralph Wakley", profile_img:"img/profile_img/profile-ralph.png", icon_img:"img/profile_icons/ralph-icon.png", bio:"Ralph Wakely, is a native of Logan, Utah. He was a member of the United States Biathlon Ski Team for three years from 1966 to 1968 and represented the United States in the biathlon in the 1968 Olympic Winter Games in Grenoble, France. He finished as the top American in the 20K individual biathlon race. At the University of Utah, Ralph was an All-American cross-country skier and was awarded the prestigious Alf Engen Sportsmanship awared in 1969. Ralph was also a member of the United States National cross-country team in 1970 and 1971"},
    {id: 5, name:"Bill Spencer", profile_img:"img/profile_img/profile-bill.png", icon_img:"img/profile_icons/bill-icon.png", bio:"Bill Spencer was not only a great competitor in the world of cross-country skiing, he also spearheaded the development and evolution of the sport known as Biathlon. Bill was named \"All-American\" in Nordic skiing in the late 1950s. As an expert marksman and competitive Nordic skier, he joined the U.S. Olympic Biathlon Teams in 1964 and 1968, and won many championships. Bill eventually became Team Leader and Shooting Coach of several U.S. Olympic Winter Biathlon teams."},
    {id: 6, name:"Charles Stoney", profile_img:"img/profile_img/profile-ralph.png", icon_img:"img/profile_icons/charles-icon.png", bio:"Charles T. Stoney founded the Wasatch Mountain Club with his two sons and a few hiking buddies in 1912. Using homemade wooden skis and a single bamboo pole for support and speed control, the club members became the first organized group of skiers to venture into the winter mountains. Even today, Wasatch Mountain Club members follow the original cross-country skiing routes pioneered by Charles Stoney."}
];

class SkiBox extends Component {

    render() {
        return (
            <div onClick={this.props.handleProfileClick} key={this.props.id} className="ski-box"><img className="ski-box-icon" src={this.props.icon_img} alt="skiier" /><a className="ski-box-name">{this.props.name}</a></div>
        );
    }
}

class SkiProfile extends Component {

    render() {
        if(this.props.showProfile === "Yes")
        {
            return (
                <div className="ski-profile-box">
                    <div className="ski-profile-inner">
                        <div className="ski-col">
                            <img src={skiiers[this.props.skiierId].profile_img} alt="Missing skiier...." />
                        </div>
                        <div className="ski-col">
                            <a>{skiiers[this.props.skiierId].name}</a>
                            <p>{skiiers[this.props.skiierId].bio}</p>
                        </div>
                        <div onClick={this.props.handleProfileClick} id="close_btn">close</div>
                    </div>
                </div>
            );
        }
        else
        {
            return <div></div>;
        }
    }
}

class SecondPage extends Component {
    constructor(props) {
        super(props);
        this.state = {showProfile: "No", skiId: 1};

        // This binding is necessary to make `this` work in the callback
        this.handleProfileClick = this.handleProfileClick.bind(this);
    }

    handleProfileClick(id) {
        let newState;
        let newId;

        newState = this.state.showProfile === "No" ? "Yes": "No";
        newId = this.state.skiId !== undefined ? id: 1;

        this.setState(prevState => ({
            showProfile: newState,
            skiId: newId,
        }));
    }

    render() {
        return(
            <div>
                <SkiProfile skiierId={this.state.skiId} handleProfileClick={this.handleProfileClick} showProfile={this.state.showProfile} />
                <div id="menu" className="menu">
                    <img src="img/bg2.png" className="bg-img" alt="background" />
                    <div className="dwn-menu-title">
                        <div className="vtext">Cross Country Skiing</div>
                    </div>
                    <div className="dwn-menu-title-arrow"></div>
                    <div id="skiier_box">
                        {skiiers.map((skiier) => <SkiBox handleProfileClick={() => this.handleProfileClick(skiier.id)} id={skiier.id} name={skiier.name} icon_img={skiier.icon_img}></SkiBox>)}
                    </div>
                    <div onClick={this.props.handleClick} id="close_btn">back</div>
                    <div className="dwn-menu-title-base"></div>
                    <div className="dwn-menu-title-text">Sale Lake 2002</div>
                    <div  className="dwn-menu-base-arrow"></div>
                </div>
            </div>

        );
    }
}

export default SecondPage;