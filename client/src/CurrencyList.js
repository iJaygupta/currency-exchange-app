
import React from 'react';
import { getCurrencyList, getCurrencyExchangeRate } from './helper';
import './App.css';
import symbols from './symbols.json';


export default class CurrencyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: [],
            info: '',
            selectedCurrency: ''
        }
    }

    componentDidMount() {
        getCurrencyList()
            .then(result => {
                this.setState({ currency: result || [] })
            })
    }

    onCurrencySelect = (e) => {
        let curr = e.target.value;
        this.setState({ selectedCurrency: curr })
        if (curr) {
            getCurrencyExchangeRate()
                .then(result => {
                    this.convert(curr, result)
                })
        }
    }


    convert = (selectedCurrency, currenciesData) => {
        let rotate = currenciesData[selectedCurrency];
        let convertedCurency = {};
        Object.keys(currenciesData).map(el => {
            if (el !== selectedCurrency) {
                convertedCurency[el] = currenciesData[el] / rotate;
            }
        })
        this.setState({ info: convertedCurency })
    }

    render() {
        return (
            <div className="buttons">
                <select className="trigger-push" onChange={this.onCurrencySelect}>
                    <option value="">Select Currency</option>
                    {this.state.currency && this.state.currency.map(el => {
                        return <option value={el.slug} key={el.id}>{el.display_name}</option>
                    })}
                </select>

                {this.state.info &&
                    <>
                        <h2>Value Of 1 {this.state.selectedCurrency} in Other Currencies </h2>

                        <table className="tabular">
                            <tr>
                                <th>Symbol</th>
                                <th>Name</th>
                                <th>Value</th>
                            </tr>
                            {Object.keys(this.state.info).map(el => {
                                return <tr>
                                    <td>{el}</td>
                                    <td>{symbols[el]}</td>
                                    <td>{this.state.info[el]}</td>
                                </tr>

                            })}
                        </table>
                    </>
                }

            </div>
        )

    }

}
