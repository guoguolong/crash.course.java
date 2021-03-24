import React, { useState, useCallback, useReducer, useEffect } from 'react'

import axios from 'axios'
import { DataGrid } from '@material-ui/data-grid';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

const reducer = (state, action) => {
  const { payload } = action
  return { ...state, ...payload }
}
const initialParams = {
  query: 'redux'
}

const fetchArticles = (params) => axios.get('http://hn.algolia.com/api/v1/search', {params});

// const fetchMerchantsTest¸ = (params) => axios.get('https://open.test.mcdonalds.com.cn/core/core/merchant?id=234');
// fetchMerchantsTest();

let cnt =0;
export default () => {
  const [params, dispatch] = useReducer(reducer, initialParams)
  const [loading, setLoading] = useState(false)
  const [rows, setRows] = useState([])
  const [keyword, setKeyword] = useState('redux');


  const articleList = async () => {
    if (loading) return;
    setLoading(true)
    try {
      const res = await fetchArticles({query: keyword})
      res.data.hits = res.data.hits.map((item)=> {
        item.id = item.objectID;
        return item;
      });
      setRows(res.data.hits)
      setLoading(false)
    } catch (err) {
      console.error(err)
      setLoading(false)
    }
  }

  useEffect(() => {
    articleList()
  }, [keyword])

  const columns =[
    { field: 'title', headerName: '标题', width: 300,
      renderCell: (params, value) => {
        return <a href={params.row.url}>{params.row.title}</a>
      }
    },
    { field: 'url', headerName: 'URL', width: 630 },
    { field: 'author', headerName: '作者', width: 130 },
    { field: 'points', headerName: '分数', width: 120 },
  ];

  return (
    <div>

    关键字：<Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={keyword}
      onChange={(e)=>{
        setKeyword(e.target.value)
      }}
    >
      <MenuItem value={'redux'}>redux</MenuItem>
      <MenuItem value={'php'}>php</MenuItem>
      <MenuItem value={'python'}>python</MenuItem>
    </Select>
    <Button variant="contained" color="primary" onClick={()=>{
      // fetchArticles({query:keyword});
      articleList();
    }}>Search</Button>

    <div style={{ height:700, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  </div>
  )
}