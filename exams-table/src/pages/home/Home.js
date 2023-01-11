import React from "react";

import Header from "../../components/header/header";
import Table from "./components/table/Table";
import Tools from "./components/tools/Tools";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getSubjects } from "../../redux/actions/subjects";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // try {
    //   dispatch(getSubjects());
    // } catch (error) {
    //   console.log("error");
    // } finally {
    //   setLoading(false);
    // }
    setLoading(true);
    dispatch(getSubjects())
      .then(() => setLoading(false))
      .catch(() => {
        setLoading(false);
        console.log("error");
      });
      //eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <Tools />
      {loading ? <div className="container pt-5">loading...</div> : <Table />}
    </>
  );
};

export default Home;
