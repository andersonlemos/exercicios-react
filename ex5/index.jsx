import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';

ReactDOM.render(

<Family lastname="Silva">
        <Member name="José"></Member>
        <Member name="Maria"></Member>
        <Member name="Pedro"></Member>
        <Member name="João"></Member>
</Family>

,document.getElementById('app'));