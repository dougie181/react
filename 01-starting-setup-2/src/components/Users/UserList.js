import Wrapper from "../Helpers/Wrapper";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Wrapper>
      {props.listOfUsers.length === 0 && (
        <Card className={styles.users}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', heigh: '100vh' }}>
            <p>No Users Exist</p>
          </div>
        </Card>
      )}
      {props.listOfUsers.length > 0 && (
        <Card className={styles.users}>
          <ul>
            {props.listOfUsers.map((user) => (
              <li key={user.id}>
                <div>
                  {user.name} ({user.age} years old)
                </div>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </Wrapper>
  );
};

export default UserList;
