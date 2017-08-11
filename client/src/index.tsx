import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import {DownloadItemList} from './components/DownloadItemList';
// import {UserNotificationContainer} from "./controllers/UserNotifications";
// import {QuickControls} from "./components/QuickControls";

import {ListItem} from "./components/ListItem"
import {List} from "./components/List";

const jsx = (
  <div>
    <List/>
  </div>
);

ReactDOM.render(jsx,
  document.getElementById('app-container')
);