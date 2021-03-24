import fetch from 'cross-fetch'

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

export function fetchPosts(subreddit) {
  return async function(dispatch) {
    dispatch(requestPosts(subreddit))
    try {
      const resp = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
      const data = await resp.json()
      dispatch(receivePosts(subreddit, data))
    } catch (e) {
      dispatch({
        type: 'ERROR',
        error: e.message
      }
    )
      console.error("Network Bad:", e)
    }
  }
}