import React from "react";
import album from "./logo.svg";
import prev from "./img/prev.svg";
import play from "./img/play.svg";
import next from "./img/next.svg";

export class Card extends React.Component {
    constructor(props: any) {
        super(props);
    } 
    render() {
        return (
            <div className="card">
                <img src={album} alt="album" className="album" />
                <div>
                    <h1 className="card__title">React</h1>
                    <p className="card__author">Fundamentos y JSX</p>
                    <div className="button__grid">
                        <button className="button">
                            <img src={prev} alt="previous song" className="ico prev" />
                        </button>

                        <button className="button">
                            <img src={play} alt="play a song" className="ico play" />
                        </button>

                        <button className="button">
                            <img src={next} alt="next song" className="ico next" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}