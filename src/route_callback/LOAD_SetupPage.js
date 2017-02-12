// import { store } from '../store/store';
// import { getSetupTabTitles } from '../actions/comp.action';

// export function loadSetupPageData() {
//     store.dispatch(getSetupTabTitles('Setup'));
// }

/* 
    the reason why i don't use OnEnter callback, because it 
    doesn't wait until the state changed after dispatch an action,
    but redirect it to the page after dispatch is fired 
    even dispatching process is still running and not done yet.
*/