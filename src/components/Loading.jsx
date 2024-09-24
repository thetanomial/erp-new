const { default: LoadingSpinner } = require("../assets/LoadingSpinner");

const Loading = () => {
  const loading = true;

  return (
    <div>
      {loading ? <LoadingSpinner /> : <p>Data loaded</p>}
    </div>
  );
};


export default Loading;