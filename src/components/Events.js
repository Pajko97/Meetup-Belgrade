import React, { Component } from 'react';
import axios from 'axios';
import { PortalWithState } from 'react-portal';
import ReactHtmlParser from 'react-html-parser';


class Events extends Component {
    constructor() {
        super();
    
        this.state = {
          events: []
        };
    
        
      }
    
      

    componentDidMount() {
      
        const url = `https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/upcoming_events?photo-host=public&end_date_range=2018-10-30T00%3A00%3A00&page=20&sig_id=262454806&radius=25.0&sig=2c3c8db04de4822ffa62a093de11d3604f5924d3`;
        axios.get(url)
         .then(res => this.setState({
             events: res.data.events
         }))
    }
    
    
  render() {
      let events = this.state.events;
    return (
      <div className="Wrapper">
      <div className="events">
        {events.map((event, i) => 
            
            <div className="events__event">
                <h1 >{event.name}</h1>
                <PortalWithState node={document && document.getElementById('info')} closeOnOutsideClick closeOnEsc>
                    {({ openPortal, closePortal, isOpen, portal }) => (
                    <React.Fragment>
                        <button onClick={openPortal}>
                            Vise informacija
                        </button>
                        {portal(
                            <div className="event__description">
                                <h1>{event.name}</h1>
                                
                                <button onClick={closePortal}>Zatvori</button>
                                <h2>Grupa: {event.group.name}</h2>
                                <h2>Datum i vreme pocetka: {event.local_date} u {event.local_time}</h2>
                                <h2>Lokacija: {event.venue.name} {event.venue.name.address_1}</h2>
                                {ReactHtmlParser(event.description)}
                            
                            </div>
                        )}
                    </React.Fragment>
                    )}
                </PortalWithState>
            </div>
                       
        )}   

       </div>
       <div id="info"></div>
       </div>


      
    )
  }
}

export default Events;