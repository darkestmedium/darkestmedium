import React from 'react';




function EntryLink(props) {

  return (
    <li>
      <div><img src={props.img} alt={props.alt}></img></div>
      <div>
        <h4>{props.title}</h4>
        <p className="subTitle">{props.subTitle}</p>
        <p className="subLabel2">{props.subLabel2}</p>
        <p>Credentials <a href={props.url}>{props.credentials}</a></p>
      </div>
    </li>
  );
}

export default EntryLink;