import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from './actions'

const mapStateToProps = state => {
    let posts = [];
    if (state.postsBySubreddit[state.selectedSubreddit]) {
        posts = state.postsBySubreddit[state.selectedSubreddit].items;
    }
    return {
        error: state.error,
        posts
    }
}

function Reddit({error, posts, dispatch}) {
    return (
        <div>{error && <div style={{background:'red'}}>{error}</div>}
            <ul>
                {posts.map(item => {
                    return <li key={item.title}>{item.title}</li>
                })}
            </ul>
            <button onClick={() => {
                dispatch(fetchPosts('php'))
            }}>Fetch Reddit Posts</button>
        </div>
    )
}
const RedditWrapper = connect(mapStateToProps)(Reddit)
export default RedditWrapper;