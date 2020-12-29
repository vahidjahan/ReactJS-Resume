import React, { Component } from 'react';

class Recommendations extends Component {
  render() {

    if(this.props.data){
      var recommendations = this.props.data.recommendations.map(function(recommendation){
        return  <li key={recommendation.user}>
            <blockquote>
               <p>{recommendation.text}</p>
               <cite>{recommendation.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="recommendations">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Recommendations</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {recommendations}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Recommendations;
