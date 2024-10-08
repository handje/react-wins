import ErrorPage from "@components/fallback/ErrorPage";
import Home from "@pages/Home";
import { Audience, BoxScore, GameLayout, Schedule, TeamRanking, WatchPoint } from "@pages/game";
import { About, InfoLayout } from "@pages/info";
import { MediaLayout, News, NewsDetail, Press, PressDetail } from "@pages/media";
import { Cheer, PlayerDetailPage, PlayerLayout, PlayerPage } from "@pages/player";
import { Donation, Policy, PolicyLayout } from "@pages/policy";
import { Entrance, SeatMap, Store, TicketLayout } from "@pages/ticket";
import { Iksan, Location, WizParkIntro } from "@pages/wizpark";
import RootLayout from "layouts/RootLayout";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/ktwiz",
        children: [
          {
            element: <InfoLayout />,
            children: [
              {
                path: "about",
                element: <About />,
              },
              {
                path: "history",
                element: "연혁 component",
              },
            ],
          },

          {
            path: "policy",
            element: <PolicyLayout />,
            children: [
              {
                path: "regular",
                element: <Policy />,
              },
              {
                path: "donation",
                element: <Donation />,
              },
            ],
          },
        ],
      },
      {
        path: "/wizpark",
        children: [
          {
            path: "intro",
            element: <WizParkIntro />,
          },
          {
            path: "location",
            element: <Location />,
          },
          {
            path: "iksan",
            element: <Iksan />,
          },
        ],
      },
      {
        path: "/game",
        element: <GameLayout />,
        children: [
          {
            path: "schedule",
            element: <Schedule />,
          },
          {
            path: "boxscore",
            element: <BoxScore />,
          },
          {
            path: "boxscore/:gameDate/:gmkey",
            element: <BoxScore />,
          },
          {
            path: "ranking",
            children: [
              { index: true, element: <Navigate to="team" /> },
              { path: "team", element: <TeamRanking /> },
              { path: "crowd", element: <Audience /> },
            ],
          },
          {
            path: "watchpoint",
            element: <WatchPoint />,
          },
        ],
      },

      {
        path: "/player",
        element: <PlayerLayout />,
        children: [
          {
            path: ":playerType",
            element: <PlayerPage />,
          },
          {
            path: ":playerType/detail",
            element: <PlayerDetailPage />,
          },
          {
            path: "cheer",
            element: <Cheer />,
          },
        ],
      },
      {
        path: "/media",
        element: <MediaLayout />,
        children: [
          {
            path: "wiznews",
            children: [
              { index: true, element: <News /> },
              { path: ":artcSeq", element: <NewsDetail /> },
            ],
          },
          {
            path: "wizpress",
            children: [
              { index: true, element: <Press /> },
              { path: ":artcSeq", element: <PressDetail /> },
            ],
          },
        ],
      },
      {
        path: "/ticket",
        element: <TicketLayout />,
        children: [
          {
            path: "seatmap",
            element: <SeatMap />,
          },
          {
            path: "entrance",
            element: <Entrance />,
          },
          {
            path: "store",
            element: <Store />,
          },
        ],
      },
      {
        path: "/login",
        element: "로그인 component",
      },
      {
        path: "/signup",
        element: "회원가입 component",
      },
    ],
  },
]);
