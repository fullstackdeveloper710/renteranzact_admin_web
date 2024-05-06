import { Box, CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import {
  Outlet,
  Navigate,
  useRoutes,
  useNavigate,
  useParams,
} from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import { routeConfig } from "../pages/routeConfig";
import ManageRolesAndPermission from "../pages/rolesandPermissionManagement";
import AddNewRole from "../pages/rolesandPermissionManagement/add-new-role";
import ReviewAndRatingMgt from "../pages/Review&RatingMgt/Review&RatingMgt";
import FinancePerformance from "../pages/financePerformance/FinancePerformance";
import ManagePayouts from "../pages/managePayouts/ManagePayouts";
import ManageTransactions from "../pages/manageTransactions/manageTransaction";
import Activitylog from "../pages/activityLog/activitylog";
import ManageChat from "../pages/manageChat/manageChat";
import ChatAsPerUser from "../pages/manageChat/chatAsPerUser";
import ReviewerAdminDashboard from "../pages/reviewer-admin-dashboard";
export const LoginPage = lazy(() => import("../pages/login"));
export const ProductsPage = lazy(() => import("../pages/products"));
export const Page404 = lazy(() => import("../pages/page-not-found"));
export const Dashboard = lazy(() => import("../pages/app"));
export const ManageEmployees = lazy(() =>
  import("../pages/manage-employees/index")
);
export const AddEmployees = lazy(() =>
  import("../pages/manage-employees/add-employee")
);
const ManageFaq = lazy(() => import("../pages/manage-faq"));
const AddFAQ = lazy(() => import("../pages/manage-faq/add-faq"));
export const ManageUsers = lazy(() => import("../pages/manageUsers/index"));
export const AddUsers = lazy(() => import("../pages/manageUsers/add-user"));
export const ManagePrivacyPolicy = lazy(() =>
  import("../pages/manage-privacy-policy")
);
export const UserDetails = lazy(() =>
  import("../pages/manageUsers/user-details")
);
export const PropertyManagement = lazy(() =>
  import("../pages/property-management/index")
);
export const Profile = lazy(() => import("../pages/profile"));
export const Employee = lazy(() =>
  import("../pages/manage-employees/view-employee")
);

export const ManageBlogs = lazy(() => import("../pages/manage-blogs"));
export const AddBlogs = lazy(() => import("../pages/manage-blogs/add-blog"));
export const BlogDetail = lazy(() =>
  import("../pages/manage-blogs/blog-detail")
);

export const ManageAboutUs = lazy(() =>
  import("../pages/manage-aboutUs/index")
);
export const ManageCareers = lazy(() => import("../pages/manage-careers"));
export const AddCareers = lazy(() =>
  import("../pages/manage-careers/add-careers")
);

export const CreateTestimonials = lazy(() =>
  import("../pages/create-testimonials/add-testimonials")
);
export const Testimonials = lazy(() =>
  import("../pages/create-testimonials/index")
);

export const ManageSocialMediaLinks = lazy(() =>
  import("../pages/manage-social-media-links")
);
export const ManageBanners = lazy(() => import("../pages/manage-banners"));
export const AddBanners = lazy(() =>
  import("../pages/manage-banners/add-banners")
);
export const AddSocialMediaLinks = lazy(() =>
  import("../pages/manage-social-media-links/add-social-media-links")
);

export const DataProtection = lazy(() => import("../pages/data-protection"));
export const ManageAggrements = lazy(() =>
  import("../pages/manage-aggrements")
);
export const AddAggrements = lazy(() =>
  import("../pages/manage-aggrements/add-aggrements")
);

export const AddProperty = lazy(() =>
  import("../pages/property-management/add-property")
);
export const ManageAggrementsAndDocuments = lazy(() =>
  import("../pages/property-management/manage-aggrements&documents")
);
export const PropertiesInDemand = lazy(() =>
  import("../pages/properties-in-demand")
);

const LoadDynamicComponent = (object) => {
  const Component = lazy(() => import(`${object}`));
  return <Component />;
};
export default function Router() {
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
      children: [
        {
          element: <Dashboard />,
          path: "dashboard",
        },
        {
          element: <ManageUsers />,
          path: "manage-users",
        },
        {
          element: <AddUsers />,
          path: "manage-users/add-user",
        },
        {
          element: <ManageEmployees />,
          path: "manage-employees",
        },
        {
          element: <AddEmployees />,
          path: "manage-employees/add-employees",
        },
        {
          element: <UserDetails />,
          path: "manage-users/user-details",
        },
        {
          element: <ManageRolesAndPermission />,
          path: "roles-and-permissions-management",
        },
        {
          element: <AddNewRole />,
          path: "add-new-roles-and-permissions-management",
        },
        {
          element: <ReviewAndRatingMgt />,
          path: "review-and-rating-mgt",
        },
        {
          element: <FinancePerformance />,
          path: "finance-performance",
        },
        {
          element: <ManageTransactions />,
          path: "manage-transactions",
        },
        {
          element: <ManagePayouts />,
          path: "manage-payouts",
        },
        {
          element: <Employee />,
          path: "employee",
        },
        {
          element: <ManageRolesAndPermission />,
          path: "roles-and-permissions-management",
        },
        {
          element: <PropertyManagement />,
          path: "property-management",
        },
        {
          element: <PropertiesInDemand />,
          path: "properties-in-demand",
        },
        {
          element: <ManageAggrementsAndDocuments />,
          path: "manage-aggrements-documents",
        },
        {
          element: <ManageBlogs />,
          path: "manage-blogs",
        },
        {
          element: <ManageAboutUs />,
          path: "manage-aboutUS",
        },
        {
          element: <ManagePrivacyPolicy />,
          path: "manage-privacy-policy",
        },
        {
          element: <Profile />,
          path: "profile",
        },

        {
          element: <Activitylog />,
          path: "activity-logs",
        },
        {
          element: <ManageChat />,
          path: "manage-chat",
        },
        {
          element: <ChatAsPerUser />,
          path: "user-chat",
        },
        {
          element: <AddBlogs />,
          path: "add-blogs",
        },
        {
          element: <BlogDetail />,
          path: "blog-detail",
        },
        {
          element: <ManageFaq />,
          path: "manage-faq",
        },
        {
          element: <AddFAQ />,
          path: "add-faq",
        },

        {
          path: "/404",
          element: <Page404 />,
        },
        {
          path: "*",
          element: <Navigate to="/404" replace />,
        },
        {
          element: <ManageCareers />,
          path: "manage-careers",
        },
        {
          element: <AddCareers />,
          path: "add-careers",
        },
        {
          element: <Testimonials />,
          path: "testimonials",
        },
        {
          element: <ManageSocialMediaLinks />,
          path: "manage-social-media-links",
        },
        {
          element: <AddSocialMediaLinks />,
          path: "add-social-media-links",
        },
        {
          element: <DataProtection />,
          path: "data-protection",
        },
        {
          element: <CreateTestimonials />,
          path: "add-testimonials",
        },
        {
          element: <ManageBanners />,
          path: "manage-banners",
        },
        {
          element: <AddBanners />,
          path: "add-banners",
        },
        {
          element: <ManageAggrements />,
          path: "manage-aggrements",
        },
        {
          element: <AddAggrements />,
          path: "add-aggrements",
        },
        {
          element: <AddProperty />,
          path: "add-property",
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
  // children: routeConfig.map((x) => ({
  //   element: LoadDynamicComponent(x.path),
  //   path: `/${x.link}`,
  // })),

  return routes;
}
