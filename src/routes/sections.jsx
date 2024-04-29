import { Box, CircularProgress } from "@mui/material";
import { lazy, Suspense, useEffect } from "react";
import { Outlet, Navigate, useRoutes, useNavigate , useParams } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import { routeConfig } from "../pages/routeConfig";
import ManageRolesAndPermission from "../pages/rolesandPermissionManagement";
import AddNewRole from "../pages/rolesandPermissionManagement/add-new-role";
import ReviewAndRatingMgt from "../pages/Review&RatingMgt/Review&RatingMgt";
import FinancePerformance from "../pages/financePerformance/FinancePerformance";
import ManagePayouts from "../pages/managePayouts/ManagePayouts";
export const LoginPage = lazy(() => import("../pages/login"));
export const ProductsPage = lazy(() => import("../pages/products"));
export const Page404 = lazy(() => import("../pages/page-not-found"));
export const Dashboard = lazy(() => import("../pages/app"));
export const ManageEmployees = lazy(() => import("../pages/manage-employees/index"));
export const AddEmployees = lazy(() => import("../pages/manage-employees/add-employee"));
export const ManageUsers = lazy(() => import("../pages/manageUsers/index"));
export const AddUsers = lazy(() => import("../pages/manageUsers/add-user"));
export const UserDetails = lazy(() => import("../pages/manageUsers/user-details"));

const LoadDynamicComponent = (object) => {
  const Component = lazy(() => import(`${object}`));
  return <Component />;
};
export default function Router() {
const navigate = useNavigate()
  // useEffect(() =>{
  //   navigate('/login')
  // },[])
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense
            fallback={
              <Box
                sx={{
                  display: "flex",
                  flex: 1,
                  height: "100vh",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            }
          >
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children :[
        {
          element : <Dashboard />,
          path : 'dashboard'
        },
        {
          element : <ManageUsers />,
          path : 'manage-users'
        },
        {
          element : <AddUsers />,
          path : 'manage-users/add-user'
        },
        {
          element : <ManageEmployees />,
          path : 'manage-employees'
        },
        {
          element : <AddEmployees />,
          path : 'manage-employees/add-employees'
        },
        {
          element : <UserDetails />,
          path : 'manage-users/user-details'
        },
        {
          element : <ManageRolesAndPermission />,
          path : 'roles-and-permissions-management'
        },
        {
          element : <AddNewRole />,
          path : 'add-new-roles-and-permissions-management'
        },
        {
          element : <ReviewAndRatingMgt />,
          path : 'review-and-rating-mgt'
        },
        {
          element : <FinancePerformance />,
          path : 'finance-performance'
        }
        ,
        {
          element : <ManagePayouts />,
          path : 'manage-payouts'
        }
      ]
      // children: routeConfig.map((x) => ({
      //   element: LoadDynamicComponent(x.path),
      //   path: `/${x.link}`,
      // })),
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/404",
      element: <Page404 />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
