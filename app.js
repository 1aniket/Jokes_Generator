import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./res/components/Header";
import JokeWindow from "./res/components/JokeWindow";
import Filter from "./res/components/Filter";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./res/components/App.css";
import Random from "./res/components/Random";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

const AppLayout = () => {
  const [checkedValues, setCheckedValues] = useState([]);
  const [avoid, setAvoid] = useState([]);
  const [type, setType] = useState([]);
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState("false");

  //console.log(checkedValues , avoid , type);

  return (
    <>
      <div className="container">
        <div className="col col-1">
          <Header />
          <Outlet
            context={[
              checkedValues,
              setCheckedValues,
              avoid,
              setAvoid,
              type,
              setType,
              jokes,
              setJokes,
              isLoading,
              setIsLoading,
            ]}
          />
        </div>

        <div className="col">
          <JokeWindow joke={jokes} is={isLoading} set={setIsLoading} />
        </div>
      </div>
    </>
  );
};

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/search",
        element: <Filter />,
      },
      {
        path: "/",
        element: <Random />,
      },
    ],
  },
]);

root.render(<RouterProvider router={AppRoutes} />);
