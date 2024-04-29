import Icon from "../components/iconify/iconify";
import { AppConstants } from "../utils/appConstants";
export const routeConfig = [
  {
    title: AppConstants.sidebarConstants.dashboard,
    link: "dashboard",
    path: "/app",
    icon : <Icon icon="ri:dashboard-fill" />,
    role: ["superAdmin"],
    show: true,
  },
  {
    title: AppConstants.sidebarConstants.manageUsers,
    link: "manage-users",
    icon : <Icon icon="mdi:users" />,
    path: "/src/pages/manageUsers/index",
    role: ["superAdmin"],
    show: true,
  },
  {
    title: "Add User",
    link: "manage-users/add-user",
    path: "/src/pages/manageUsers/add-user.jsx",
    show: false,
  },
  {
    title: "Add Employee",
    link: "manage-employees/add-employees",
    path: "/src/pages/manage-employees/add-employee.jsx",
    show: false,
  },
  {
    title: "User details",
    link: "manage-users/user-details",
    path: "/src/pages/manageUsers/user-details",
    show: false,
  },
  {
    title: AppConstants.sidebarConstants.manageEmployees,
    link: "manage-employees",
    path: "/src/pages/manage-employees",
    icon : <Icon icon="clarity:employee-group-solid" />,
    role: ["superAdmin"],
    show: true,
  },
  {
    title: AppConstants.sidebarConstants.rolesAndPremission,
    link: "roles-and-permissions-management",
    path: "./pages/rolePermissions",
    icon : <Icon icon="fluent-mdl2:permissions" />,
    role: ["superAdmin"],
    show: true,
  },
  
  {
    title: AppConstants.sidebarConstants.propertyManagement,
    link: "property-management",
    path: "./pages/propertyManagement",
    icon : <Icon icon="ph:warehouse-thin" />,
    role: ["superAdmin"],
    show: true,
  },
  {
    title: AppConstants.sidebarConstants.reviewRating,
    link: "review-and-rating-mgt",
    path: "./pages/reviewRating",
    icon : <Icon icon="carbon:review" />,
    role: ["superAdmin"],
    show: true,
  },
  {
    title: AppConstants.sidebarConstants.financialPerformance,
    link: "finance-performance",
    path: "./pages/financialPerformance",
    icon: <Icon icon="material-symbols:finance" />,
    role: ["superAdmin"],
    show: true,
  },
  {
    title: AppConstants.sidebarConstants.manageTransactions,
    link: "manage-transactions",
    path: "./pages/manageTransactions",
    icon : <Icon icon="ant-design:transaction-outlined" />,
    role: ["superAdmin"],
    show: true,
  },
  {
    title: AppConstants.sidebarConstants.managePayouts,
    link: "manage-payouts",
    path: "./pages/managePayouts",
    role: ["superAdmin"],
    icon : <Icon icon="heroicons:currency-rupee" />,
    show: true,
  },
  {
    title: AppConstants.sidebarConstants.activityLog,
    link: "activity-log",
    path: "./pages/activityLog",
    icon : <Icon icon="tdesign:activity" />,
    role: ["superAdmin"],
    show: true,
  },
  {
    title: AppConstants.sidebarConstants.manageChat,
    link: "roles-permission",
    path: "./pages/manageEmployees",
    role: ["superAdmin"],
    icon : <Icon icon="majesticons:chat-line" />,
    show: true,
  },
];
