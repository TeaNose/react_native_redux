import {combineReducers} from 'redux';
import UserListReducer from './UserList';
import UserTransactionReducer  from './UserTransactionReducer';
import UserTransactionReducer2 from './UserTransactionReducer2';

const allReducers = combineReducers({
  userList: UserListReducer,
  userTransaction: UserTransactionReducer
})

export default allReducers;
