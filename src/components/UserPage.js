


const UserPage = ({ match, location }) => {
     const users = [
  {
    name: `Param`,
  },
  {
    name: `Vennila`,
  },
  {
    name: `Afrin`,
  },
     ]
    const { params: { userId } } = match;

    return (
        <div>

        <p>
            <strong>User ID: </strong>
            {userId}
        </p>
            
        <p>
                <strong>User Name: </strong>
                {users[userId - 1].name}
        </p>
            
        </div>
    )
}
export default UserPage