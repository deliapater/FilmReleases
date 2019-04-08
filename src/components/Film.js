import React, { Component } from 'react';

    const Film = (props) => {

      return (
        <div className="film">
        <table>
        <tr>
        <td><h4 className="film-name">{props.name}</h4></td>
        <td><a href={props.link}></a></td>
        </tr>
        </table>
        </div>
      );
    }

export default Film;
