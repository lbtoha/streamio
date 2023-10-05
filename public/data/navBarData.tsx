import {
  IconAlbum,
  IconCalendarEvent,
  IconClipboardText,
  IconDots,
  IconHeadset,
  IconMusic,
  IconSmartHome,
  IconWorld,
} from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";
export const sideBarData = [
  {
    id: uuidv4(),
    menuTitle: "Home",
    path: "home",
    icon: <IconSmartHome />,
    menuItems: [
      { id: uuidv4(), parentPath: "home", title: "Home One", path: "/" },
      {
        id: uuidv4(),
        parentPath: "home",
        title: "Home Two",
        path: "/home-two",
      },
    ],
  },
  {
    id: uuidv4(),
    menuTitle: "Explore",
    path: "/explore",
    icon: <IconWorld />,
  },
  {
    id: uuidv4(),
    menuTitle: "Music",
    path: "/music",
    icon: <IconMusic />,
  },
  {
    id: uuidv4(),
    menuTitle: "Albums",
    path: "/albums",
    icon: <IconAlbum />,
  },
  {
    id: uuidv4(),
    menuTitle: "Podcasts",
    path: "/poodcasts",
    icon: <IconHeadset />,
  },
  {
    id: uuidv4(),
    menuTitle: "Event",
    path: "/event",
    icon: <IconCalendarEvent />,
  },
  {
    id: uuidv4(),
    menuTitle: "Recent",
    className: "d-xl-none",
    path: "/recent",
    icon: <IconClipboardText />,
    menuItems: [
      {
        id: uuidv4(),
        parentPath: "/recent",
        title: "Genres",
        path: "/genres",
      },
      {
        id: uuidv4(),
        parentPath: "/recent",
        title: "Moods",
        path: "/moods",
      },
      {
        id: uuidv4(),
        parentPath: "/recent",
        title: "Trending",
        path: "/trending",
      },
      {
        id: uuidv4(),
        parentPath: "/recent",
        title: "Popular",
        path: "/artists",
      },
    ],
  },
  {
    id: uuidv4(),
    menuTitle: "Others",
    className: "d-xl-none",
    path: "others",
    icon: <IconClipboardText />,
    menuItems: [
      {
        id: uuidv4(),
        parentPath: "/others",
        title: "Sing In",
        path: "/signin",
      },
      {
        id: uuidv4(),
        parentPath: "/others",
        title: "Sign Up",
        path: "/signup",
      },
      {
        id: uuidv4(),
        parentPath: "/others",
        title: "Reset Password",
        path: "/reset-password",
      },
      {
        id: uuidv4(),
        parentPath: "/others",
        title: "Faq",
        path: "/faq",
      },
      {
        id: uuidv4(),
        parentPath: "/others",
        title: "Contact",
        path: "/contact",
      },
      {
        id: uuidv4(),
        parentPath: "/others",
        title: "Show Details",
        path: "/product-details",
      },
      {
        id: uuidv4(),
        parentPath: "/others",
        title: "Cart Page",
        path: "/cart",
      },
      {
        id: uuidv4(),
        parentPath: "/others",
        title: "Privacy policy",
        path: "/privacy",
      },
      {
        id: uuidv4(),
        parentPath: "/others",
        title: "404 Page",
        path: "/error",
      },
    ],
  },
  {
    id: uuidv4(),
    menuTitle: "Pages",
    path: "pages",
    icon: <IconClipboardText />,
    menuItems: [
      {
        id: uuidv4(),
        parentPath: "pages",
        title: "Blog Page",
        path: "/blog",
      },
      {
        id: uuidv4(),
        parentPath: "pages",
        title: "Blog Details",
        path: "/blog-details",
      },
      {
        id: uuidv4(),
        parentPath: "pages",
        title: "Show Page",
        path: "/freature-show",
      },
      {
        id: uuidv4(),
        parentPath: "pages",
        title: "Show Details",
        path: "/show-details",
      },
      {
        id: uuidv4(),
        parentPath: "pages",
        title: "Product Page",
        path: "/product",
      },
      {
        id: uuidv4(),
        parentPath: "pages",
        title: "Show Details",
        path: "/product-details",
      },
      {
        id: uuidv4(),
        parentPath: "pages",
        title: "Cart Page",
        path: "/cart",
      },
      {
        id: uuidv4(),
        parentPath: "pages",
        title: "Check out",
        path: "/checkout",
      },
      {
        id: uuidv4(),
        parentPath: "pages",
        title: "Pricing Plan",
        path: "/pricing",
      },
    ],
  },
];

export const mainNavbarData = [
  {
    id: uuidv4(),
    menuTitle: "Genres",
    path: "/genres",
  },
  {
    id: uuidv4(),
    menuTitle: "Moods",
    path: "/moods",
  },
  {
    id: uuidv4(),
    menuTitle: "Trending",
    path: "/trending",
  },
  {
    id: uuidv4(),
    menuTitle: "Popular",
    path: "/artists",
  },
  {
    id: uuidv4(),
    menuTitle: "Others",
    path: "#",
    icon: <IconDots />,
    menuItems: [
      {
        id: uuidv4(),
        title: "Sing In",
        path: "/signin",
      },
      {
        id: uuidv4(),
        title: "Sign Up",
        path: "/signup",
      },
      {
        id: uuidv4(),
        title: "Reset Password",
        path: "/reset-password",
      },
      {
        id: uuidv4(),
        title: "Faq",
        path: "/faq",
      },
      {
        id: uuidv4(),
        title: "Contact",
        path: "/contact",
      },
      {
        id: uuidv4(),
        title: "Show Details",
        path: "/product-details",
      },
      {
        id: uuidv4(),
        title: "Cart Page",
        path: "/cart",
      },
      {
        id: uuidv4(),
        title: "Privacy policy",
        path: "/privacy",
      },
      {
        id: uuidv4(),
        title: "404 Page",
        path: "/error",
      },
    ],
  },
];
