import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlatesApi } from "../../store/dashboard/Reducers";
import Popular from "./Popular";
import Suggestion from "./Suggestion";

const Dashboard = () => {
  const dispatch = useDispatch();

  // const { platesData, isLoading, isError } = useSelector((store) => ({
  //   platesData: store?.dashboard?.platesData,
  //   isLoading: store?.dashboard?.platesData?.loading,
  //   isError: store?.dashboard?.platesData?.error,
  // }));
  // console.log("==platesData==", platesData);

  // useEffect(() => {
  //   dispatch(getPlatesApi());
  // }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="min-h-screen flex flex-col items-center justify-center text-[150px] font-bold text-black">
        <p>Be Lazy</p>
        <p>Be Productive</p>
      </div>

      <Popular />

      <Suggestion />

      {/* <Review /> */}
    </div>
  );
};

export default Dashboard;
