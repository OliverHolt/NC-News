const NotFoundPage = ({ error }) => {
  return (
    <div id="not-found">
      <h1>PAGE NOT FOUND!</h1>
      <h2>Press a button above to go back...</h2>
      <br />
      <br />
      <p>{error === null ? "Request failed with status code 404" : error}</p>
    </div>
  );
};

export default NotFoundPage;
