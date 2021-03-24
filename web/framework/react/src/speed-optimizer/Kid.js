import React from 'react';

export default function (props) {
  console.log('Kid:', props.name);

  return (
    <h1>Kid: { props.name } </h1>
  );
}