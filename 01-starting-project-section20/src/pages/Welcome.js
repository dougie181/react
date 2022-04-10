import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
const Welcome = () => {

    return <section>
			<h1>Welcome Page</h1>
			<Route path='/welcome/new-user'>
				<p>New user text</p>
			</Route>
		</section>
};

export default Welcome;