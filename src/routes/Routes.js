import CricketBet from "../Component/main/CricketBet";
import Home from "../Component/main/Home";

export const route = [
  {
    id: 1,
    path: "/dashboard",
    element: <Home />,
  },
  {
    id: 2,
    path: "/cricket",
    element: <CricketBet />,
  },
];
