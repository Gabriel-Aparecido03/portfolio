import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "../components/layouts/base-layout";
import { Home } from "../pages/home";
import { WorkExperience } from "../pages/work-experience";
import { About } from "../pages/about";
import { Projects } from "../pages/projects";
import { Communities } from "../pages/projects/communities";
import { Contact } from "../pages/contact";
import { Articles } from "../pages/articles";
import { JrPanfletos } from "../pages/projects/jr-panfletos";
import { BoxDelivery } from "../pages/projects/box-delivery";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/work-experience/khanum',
        element: <WorkExperience />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contacts',
        element: <Contact />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/projects/communities',
        element: <Communities />
      },
      {
        path: '/projects/box-delivery',
        element: <BoxDelivery />
      },
      {
        path: '/projects/jr-panfletos',
        element: <JrPanfletos />
      },
      {
        path: '/articles',
        element: <Articles />
      }
    ]
  }
])