import React, { Component } from 'react';

    const Film = (props) => {

      return (
        <div className="film">
        <table>
        <tr>
        <td><a href={props.link}><h4 className="film-name">{props.name}</h4></a></td>
        </tr>
        </table>
        </div>
      );
    }

export default Film;
