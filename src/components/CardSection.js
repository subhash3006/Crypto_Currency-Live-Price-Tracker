import React, { Component } from 'react';
import './CardSection.css';

class CardSection extends Component {
    render() {
        return (
            <div>
                <div className="coin-name text-Capitalize" style={{ color: '#ffffff' }}>
                    {this.props.coinName}
                </div>
                <section className="row card-section" style={{display:"flex", justifyContent:"center"}}>
                    <div className="card text-white text-center m-3">
                     <div className="card-body">
                    <h6 className="card-title">Market Cap 24Hrs</h6>
                     <p className="card-text" style={{ color: this.props.mCap24 > 0 ? '#6fe31c' : 'red' }}>
                     {this.props.mCap24} %
                    </p>
                   </div>
                 </div>

                    <div className="card text-white text-center m-3">
                        <div className="card-body">
                            <h6 className="card-title">All Time High</h6>
                            <p className="card-text1">
                                ${this.props.ath}
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center m-3">
                        <div className="card-body">
                            <h6 className="card-title">All Time Low</h6>
                            <p className="card-text2">
                                ${this.props.atl}
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center m-3">
                        <div className="card-body">
                            <h6 className="card-title">Positive Sentiments</h6>
                            <p className="card-text positive-sentiment">
                                {this.props.sentiment} %
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center m-3">
                        <div className="card-body">
                            <h6 className="card-title">High 24Hrs</h6>
                            <p className="card-text high-24hrs">
                                ${this.props.high24}
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center m-3">
                        <div className="card-body">
                            <h6 className="card-title">Low 24Hrs</h6>
                            <p className="card-text low-24hrs">
                                ${this.props.low24}
                            </p>
                        </div>
                    </div>
                </section>
                <div>
                    <div className="section-header">Current Price</div>
                    <div className="current-price">
                        ${this.props.currentPrice}
                    </div>
                </div>
            </div>
        );
    }
}

export default CardSection;
