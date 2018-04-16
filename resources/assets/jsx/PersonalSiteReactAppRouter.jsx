import { BrowserRouter }	from 'react-router-dom';
// TOP LEVEL COMPONENTS
import PersonalSiteApp 		from './hamisor_personal_site/components/PersonalSiteApp';

ReactDOM.render(
	<BrowserRouter>
		<PersonalSiteApp />
	</BrowserRouter>,
	document.getElementById('reactApp')
);


