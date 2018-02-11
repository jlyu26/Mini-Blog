import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostReducer,
  // All forms we hook up inside different components are going to assume
  // that the form reducer is being applied to the `form` piece of state
  form: formReducer
});

export default rootReducer;
