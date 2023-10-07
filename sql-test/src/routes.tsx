import { StudyCription } from "./pages/study";
import { GroupCription } from "./pages/group";
import { TestCription } from "./pages/test";
export const routes = [
  {
    path: '/',
    element: <StudyCription/>,
  },
  {
    path: '/study',
    element: <StudyCription/>,
  },
  {
    path: '/group',
    element: <GroupCription/>,
  },
  {
    path: '/test',
    element: <TestCription/>,
  },
];