import React from "react";
//import * as _ from "lodash";
//import {Link} from "react-router-dom";


  class SingleFavorite extends React.Component {
   
     render() {
       return (
         <div class="column is-1">
           <img src={"https://image.tmdb.org/t/p/w185/" + this.props.favorite.poster} alt="Sample Title" />
         </div>
       )
     }
   }
   

export default SingleFavorite;