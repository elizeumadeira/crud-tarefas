import React from 'react';
import If from './if';

export default props => (
    <If test={!props.hide}>
        <a className={'btn btn-' + props.style} onClick={props.onClick} href={props.link}>
            <i className={'fa fa-' + props.icon}></i>
            {props.text}
        </a>
    </If>
)