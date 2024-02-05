// eslint-disable-next-line react/prop-types
const Result = ({ results }) => {
  return (
    <>
      {results && (
        <>
          {/* <div>Answer:</div> */}
          <div className="result">{results}</div>
        </>
      )}
    </>
  );
};

export default Result;
