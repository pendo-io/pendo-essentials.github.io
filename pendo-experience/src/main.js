import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './dashboard/dashboard.js';
import Accounts from './accounts/accounts.js';
import Contacts from './contacts/contacts.js';
import Opportunities from './opportunities/opportunities.js';
import Details from './details/details.js';

const Main = () => (
	<main>
		<Switch>
			<Route exact path ='/' component={Dashboard}/>
			<Route path='/accounts' component={Accounts} />
			<Route path='/contacts' component={Contacts} />
			<Route path='/opportunities' component={Opportunities} />
			<Route path='/*/*/details' component={Details} />
		</Switch>
	</main>
	);

export default Main;