import React from 'react';

const App = () => {
  const [username, setUsername] = React.useState();
  React.useEffect(() => {
    fetch('/api/getUsername')
      .then((res) => res.json())
      .then((user) => setUsername(user.username));
  }, []);

  return (
    <div>
      {username ? (
        <h1>{`Hello ${username}`}</h1>
      ) : (
        <h1>Loading.. please wait!</h1>
      )}
    </div>
  );
};

export default App;
