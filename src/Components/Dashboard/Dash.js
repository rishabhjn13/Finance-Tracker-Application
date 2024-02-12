import './Dash.css'
import React, { Component } from 'react'
export default class Dash extends Component {
  render() {
    return (
      <div id='dashboard-parent'>
        <div id='main-dashboard' className=''>
          <main id='dash-activity' className=''>
            <section className="dash-actions">
              <header>
                <span>Actions</span>
              </header>
            </section>
            <section className="dash-canvas">
              <header>
                <span>Activities & Balance</span>
              </header>
            </section>
            <section className="dash-display">
              <header>
                <span>Transactions</span>
              </header>
            </section>
          </main>
        </div>
      </div>
    )
  }
}
