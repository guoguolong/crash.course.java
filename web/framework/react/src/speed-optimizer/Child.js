import React, {useEffect} from 'react';

export default function (props) {
  console.log('Child: ', props.name);

  return (
    <h1>{(new Date()).getTime()} Child: { props.name }</h1>
  );
}