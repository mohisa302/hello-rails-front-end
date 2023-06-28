import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/reducers/greetingReducer';

function Greeting() {
  const dispatch = useDispatch();
  const { greeting, loading, error } = useSelector((state) => state.greeting);
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div className="home">
      {loading && (
        <div className="spinner-border" role="status">
          <span className="sr-only" />
        </div>
      )}
      {error && <h2>Something went wrong!</h2>}
      {!loading && <h1>{greeting}</h1>}
    </div>
  );
}
export default Greeting;
