import MyBlog from "./components/MyBlog";
import CalenderPage from "./pages/CalenderPage";
import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";
import MessagePage from "./pages/MessagePage";
import SettingPage from "./pages/SettingPage";
import SharedPage from "./pages/TransferPage";
import UploadPage from "./pages/UploadPage";
import YourFriendPage from "./pages/YourFriendPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/calender", element: <CalenderPage /> },
  { path: "/contact-us/*", element: <ContactsPage /> },
  { path: "/my-blog/:id", element: <MyBlog /> },
  { path: "/sending-message", element: <MessagePage /> },
  { path: "/setting", element: <SettingPage /> },
  { path: "/transfers", element: <SharedPage /> },
  { path: "/upload", element: <UploadPage /> },
  { path: "/friends", element: <YourFriendPage /> },
];

export default routes;
