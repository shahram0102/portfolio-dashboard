import CalenderPage from "./pages/CalenderPage";
import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";
import MessagePage from "./pages/MessagePage";
import SettingPage from "./pages/SettingPage";
import SharedPage from "./pages/SharedPage";
import UploadPage from "./pages/UploadPage";
import YourFriendPage from "./pages/YourFriendPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/calender", element: <CalenderPage /> },
  { path: "/contact-us", element: <ContactsPage /> },
  { path: "/sending-message", element: <MessagePage /> },
  { path: "/setting", element: <SettingPage /> },
  { path: "/shared", element: <SharedPage /> },
  { path: "/upload", element: <UploadPage /> },
  { path: "/friends", element: <YourFriendPage /> },
];

export default routes;