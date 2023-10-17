import "./App.css";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query GetTodosWithUser {
    getTodos {
      id
      title
      completed
      user {
        id
        name
        username
        email
        phone
        website
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery(query);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="App">
      <table border={1}>
        <tbody>
          <tr>
            <th>Todo Id</th>
            <th>Todo Title</th>
            <th>User Name</th>
            <th>Username</th>
            <th>User Email</th>
            <th>User Phone</th>
            <th>User Website</th>
          </tr>
          {data.getTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo?.user?.name}</td>
              <td>{todo?.user?.username}</td>
              <td>{todo?.user?.email}</td>
              <td>{todo?.user?.phone}</td>
              <td>
                <a href={todo?.user?.website}>{todo?.user?.website}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
