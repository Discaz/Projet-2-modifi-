import React from "react"
import {NavLink, Link} from 'react-router-dom'
import './profilesearchbar.css'

class Profilesearchbar extends React.Component {
    render() {
      return (
      
      <div class="filter-container" >
          <h2>Recherche de candidat</h2>
          
          <div>
          <ul>
                <li>
                  <input class="with-gap" type="radio"  />
                  <label for="Today">Homme</label>
                </li>
                <li>
                  <input class="with-gap" type="radio" />
                  <label for="week">Femme </label>
                </li>
                <li>
                  <input class="with-gap"  type="radio"  />
                  <label for="month">Autre</label>
                </li>
                <li>
                  <input class="with-gap"  type="radio" />
                  <label for="year">Défault majeur</label>
                </li>
               
              </ul>
            </div>
          

      </div>
      
      )
    }
}

export default Profilesearchbar