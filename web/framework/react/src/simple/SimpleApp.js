import React, { useState, useEffect } from 'react';

export default function SimpleApp() {
  console.error('simple app..', new Date());
  return (
    <div>
        <button>simple click</button>
        Simple App.
    </div>
  )
}