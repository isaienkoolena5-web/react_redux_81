
import Lesson17 from "../Lessons/Lesson17/Lesson17"
import PageNotFound from "../Pages/PageNotFound/PageNotFound"
import type { RouteObj } from "./types"

export const routesData: RouteObj[] = [
  { path: "/", element: <Lesson17 /> },
  { path: "*", element: <PageNotFound /> },
]




