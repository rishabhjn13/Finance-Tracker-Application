import './Dash.css'
import React, { Component } from 'react'

export default class Dash extends Component {
  render() {
    return (
      <div id='main-dashboard'>
        <main id='dash-activity' className='border-2'>
            <section className="border-2 dash-actions">
                <header>
                    <span>Actions</span>
                </header>
            </section>
            <section className="border-2 dash-canvas">
            <header>
                    <span>Activities & Balance</span>
                </header>
            </section>
            <section className="border-2 dash-display">
            <header>
                    <span>Transactions</span>
                </header>
            </section>
        </main>
      </div>
    )
  }
}
