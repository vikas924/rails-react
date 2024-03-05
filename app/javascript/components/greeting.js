import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../store/greetingSlice";

const Greeting = () => {
  const dispatch = useDispatch();
  const greetingMsg = useSelector((state) => state.greetings.greetingState);
  const isLoading = useSelector((state) => state.greetings.loading);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1> Magical Greeting for amazing Reviewer</h1>
      <p style={{ color: "blue", fontSize: "3rem" }}>{greetingMsg}</p>
    </div>
  );
};

export default Greeting;
