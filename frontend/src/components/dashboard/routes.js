/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "./Dashboard/Dashboard.js";
import UserProfile from "./UserProfile/UserProfile.js";
import SchoolsList from "./SchoolsList/SchoolsList.js";
import Calendar from "./Calendar/Calendar.js";
import Exams from "./Exams/Exams.js";
import FlashCards from "./FlashCards/FlashCards.js";
import ExamContents from "./Exams/Contents/Content.js";
import FlashCardsContents from "./FlashCards/Contents/Content.js";



const dashboardRoutes = [
  {
    path: "/exams/content",
    name: "我的SAT",
    icon: Person,
    component: ExamContents,
    layout: "/admin",
    parent: "exams"
  },
  {
    path: "/flashcards/content",
    name: "",
    icon: Person,
    component: FlashCardsContents,
    layout: "/admin",
    parent: "flashcards"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/calendar",
    name: "我的日程表",
    icon: Dashboard,
    component: Calendar,
    layout: "/admin"
  },
  {
    path: "/exams",
    name: "我的题库",
    icon: Person,
    component: Exams,
    layout: "/admin"
  },
  {
    path: "/flashcards",
    name: "单词闪卡",
    icon: Person,
    component: FlashCards,
    layout: "/admin"
  },
  {
    path: "/schoolslist",
    name: "学校清单",
    icon: "content_paste",
    component: SchoolsList,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "我的资料",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  }
];

export default dashboardRoutes;
