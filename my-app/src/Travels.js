import React, { Component } from 'react'
import Travel from "./Travel"

        const travels = [
            {
                destination:"Zanzibar",
                country:"Tanzanie",
                photo:"https://www.azamaraclubcruises.com/sites/default/files/heros/zanzibar-tanzania-1800x1000_0.jpg",
                distance:" Distance : 6 640 Km"
            },
            {
                destination:"Chebika",
                country:"Tunisie",
                photo:"https://previews.123rf.com/images/igorspb/igorspb1110/igorspb111000267/10926652-oasis-de-montagne-chebika-%C3%A0-la-fronti%C3%A8re-du-sahara-tunisie-afrique.jpg",
                distance:" Distance : 1 400 Km"
            },
            {
                destination:"Tamerza",
                country:"Tunisie",
                photo:"http://photos.marmara.com//ProduitPhoto/TNSDMER3-circuit-tunisie-oasis-tamerza.jpg",
                distance:" Distance : 1 400 Km"
            },
            {
                destination:"Casamance",
                country:"Senegal",
                photo:"https://img.ev.mu/images/attractions/3144/1605x642/2031.jpg",
                distance:" Distance : 3 818 Km"
            }
          ];

          const Travels = () => (
            <div>
              {travels.map(travel => (
                <Travel photo={travel.photo} destination={travel.destination}
                country={travel.country} distance={travel.distance} />
              ))}
            </div>
          );
  

export default Travels;