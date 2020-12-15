import React, { Component } from 'react';
import { Header } from './../menu/header';

import { listNews } from './../api/api-news'
import moment from 'moment'

import auth from './../auth/auth-helper';

class Headline extends Component {

    constructor(props) {
        super(props);

        this.state = {
            news: [],
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.dataNews != prevProps.dataNews) {
            this.setState({
                news: this.props.dataNews[0]
            })

            console.log(this.props.dataNews)
        }
    }



    render() {
        return (
            <section className="video-section">
                <div className="container-fluid">
                    <div className="heading-area">
                        <h1>{moment(this.state.news.created).format('ll')}</h1>
                        <div className="div-box"></div>
                        <h2>{this.state.news.title}</h2>

                        <p>{this.state.news.text}
                        </p>
                        <a href={this.state.news.mediaLink} target="_black" className="watch-btn">Watch the Video</a>
                    </div>
                </div>
            </section>
        );
    }

}

class Feeds extends Component {

    constructor(props) {
        super(props);

        this.state = {
            _id: '',
            news: [],
            view: false,
        }


    }

    readNews = () => {

        if (/*auth.isAuthenticated()*/true) {
            listNews().then((data) => {
                if (data.error) {
                    alert(data.error)
                } else {
                    this.setState({
                        news: data,
                    })

                    if ($('#owl-main').hasClass('owl-theme')) { //resize event was triggering an error, this if statement is to go around it


                        $('#owl-main').trigger('destroy.owl.carousel'); //these 3 lines kill the owl, and returns the markup to the initial state
                        $('#owl-main').find('.owl-stage-outer').children().unwrap();
                        $('#owl-main').removeClass("owl-center owl-loaded owl-text-select-on");

                        $("#owl-main").owlCarousel({
                            margin: 30,
                            nav: true,
                            loop: false,
                            singleItem: true,
                            navText: ["<div class='nav-btn prev-btn'>Pre</div>", "<div class='nav-btn next-btn'>Next</div>"],
                            dots: true,
                            responsive: {
                                0: {
                                    items: 1
                                },
                                600: {
                                    items: 3
                                },
                                1000: {
                                    items: 4
                                }
                            },
                        }); //re-initialise the owl
                    }

                    this.props.updateParent(data)
                }
            });
        }
    }

    componentDidMount() {
        this.readNews();
    }

    render() {
        return (
            <section className="posts padd-both">
                <div className="container-fluid">

                    <div id="owl-main" className="owl-carousel owl-theme">

                        {this.state.news.map((el, i) =>
                            <div className="item">
                                <div className="box-img">
                                    <img src={'https://ochback.herokuapp.com/api/newsPhoto/' + el._id} style={{ height: '400px', width: 'auto' }} className="img-responsive" />
                                    <div className="heading-area">
                                        <h6>{moment(el.created).format('ll')}</h6>
                                        <div className="div-box"></div>
                                        <h2>{el.title}</h2>

                                        <p>{el.text}</p>
                                        <a href={el.mediaLink} target="_black" className="watch-btn-small">CHECK PAGE</a>
                                    </div>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
            </section>
        );
    }

}

const Instagram = () => {
    return (
        <section className="studio padd-small light">
            <div className="container-fluid">
                <div className=" m-tp">
                    <h1>INSTAGRAM FEED</h1>
                    <div className="line3"></div></div>
                <div id="insta-feed" className="owl-carousel owl-theme">
                    <div className="item"><img src="/client/assets/images/i1.jpg" className="img-responsive" /></div>
                    <div className="item"><img src="/client/assets/images/i2.jpg" className="img-responsive" /></div>
                    <div className="item"><img src="/client/assets/images/i3.jpg" className="img-responsive" /></div>
                    <div className="item"><img src="/client/assets/images/i4.jpg" className="img-responsive" /></div>
                    <div className="item"><img src="/client/assets/images/i5.jpg" className="img-responsive" /></div>
                    <div className="item"><img src="/client/assets/images/i6.jpg" className="img-responsive" /></div>
                </div>

                <div className="text-center">
                    <a href="https://www.instagram.com/ochfacademy" target="_blank" className="watch-btn marg mt">FOLLOW ON INSTAGRAM</a>
                </div>

            </div>
        </section>
    );
}

const Press = () => {
    return (
        <section className="studio padd-small light">
            <div className="container-fluid">
                <div className=" m-tp">
                    <h1>PRESS</h1>
                    <div id="press" className="owl-carousel owl-theme">
                        <div className="item"><a href="http://www.ocweekly.com/music/oc-hit-factory-builds-an-academy-for-homegrown-pop-stars-7274935" target="_blank"><img src="/client/assets/images/p1.jpg" className="img-responsive" /></a></div>
                        <div className="item"><a href="http://www.ocweekly.com/music/the-rise-of-zhavia-a-look-inside-foxs-fiercest-competitor-on-the-four-8723570" target="_blank"><img src="/client/assets/images/p2.jpg" className="img-responsive" /></a></div>
                        <div className="item"><a href="http://www.ocweekly.com/music/the-rise-of-zhavia-a-look-inside-foxs-fiercest-competitor-on-the-four-8723570" target="_blank"><img src="/client/assets/images/p3.jpg" className="img-responsive" /></a></div>
                        <div className="item"><a href="https://localemagazine.com/thomas-barsoe-of-oc-hit-factory-develops-young-talent-into-professional-musicians/" target="_blank"><img src="/client/assets/images/p4.jpg" className="img-responsive" /></a></div>
                        <div className="item"><a href="https://www.ocregister.com/2015/11/02/photos-oc-hit-factory-celebrates-its-grand-opening/" target="_blank"><img src="/client/assets/images/p5.jpg" className="img-responsive" /></a></div>
                        <div className="item"><a href="http://www.ocweekly.com/music/oc-hit-factory-builds-an-academy-for-homegrown-pop-stars-7274935" target="_blank"><img src="/client/assets/images/p6.jpg" className="img-responsive" /></a></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

class News extends Component {
    constructor(props) {
        super(props);

        this.state = {
            news: []
        }


    }

    _updateParent = (data) => {
        this.setState({
            news: data
        })
    }


    render() {
        return (
            <div>

                <Header
                    path={this.props.location.pathname}
                />
                <section className="padd-top">
                    <div className="container">
                        <div className="heading-area ex-spc">
                            <h1>NEWS</h1>
                            <div className="div-box"></div>
                        </div>
                    </div>
                </section>

                <Headline
                    dataNews={this.state.news}
                />

                <Feeds
                    updateParent={this._updateParent}
                />

                <Instagram />
                <Press />



            </div>
        )
    }
}

export default News;