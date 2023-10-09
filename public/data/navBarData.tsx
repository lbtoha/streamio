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
      {
        id: uuidv4(),
        parentPath: "home",
        title: "Home One",
        childrenPath: "/",
      },
      {
        id: uuidv4(),
        parentPath: "home",
        title: "Home Two",
        childrenPath: "/home-two",
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
        childrenPath: "/genres",
      },
      {
        id: uuidv4(),
        parentPath: "/recent",
        title: "Moods",
        childrenPath: "/moods",
      },
      {
        id: uuidv4(),
        parentPath: "/recent",
        title: "Trending",
        childrenPath: "/trending",
      },
      {
        id: uuidv4(),
        parentPath: "/recent",
        title: "Popular",
        childrenPath: "/artists",
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
        childrenPath: "/signin",
      },
      {
        id: uuidv4(),
        parentPath: "/others",
        title: "Sign Up",
        childrenPath: "/signup",
      },
      {
        id: uuidv4(),
        parentPath: "/others",
        title: "Reset Password",
        childrenPath: "/reset-password",
      },
      {
        id: uuidv4(),
        parentPath: "/others",
        title: "Faq",
        childrenPath: "/faq",
      },
      {
        id: uuidv4(),
        parentPath: "/others",
        title: "Contact",
        childrenPath: "/contact",
      },
      {
        id: uuidv4(),
        parentPath: "/others",
        title: "Show Details",
        childrenPath: "/product-details",
      },
      {
        id: uuidv4(),
        parentPath: "/others",
        title: "Cart Page",
        childrenPath: "/cart",
      },
      {
        id: uuidv4(),
        parentPath: "/others",
        title: "Privacy policy",
        childrenPath: "/privacy",
      },
      {
        id: uuidv4(),
        parentPath: "/others",
        title: "404 Page",
        childrenPath: "/error",
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
        childrenPath: "/blog",
      },
      {
        id: uuidv4(),
        parentPath: "pages",
        title: "Blog Details",
        childrenPath: "/blog-details",
      },
      {
        id: uuidv4(),
        parentPath: "pages",
        title: "Show Page",
        childrenPath: "/freature-show",
      },
      {
        id: uuidv4(),
        parentPath: "pages",
        title: "Show Details",
        childrenPath: "/show-details",
      },
      {
        id: uuidv4(),
        parentPath: "pages",
        title: "Product Page",
        childrenPath: "/product",
      },
      {
        id: uuidv4(),
        parentPath: "pages",
        title: "Show Details",
        childrenPath: "/product-details",
      },
      {
        id: uuidv4(),
        parentPath: "pages",
        title: "Cart Page",
        childrenPath: "/cart",
      },
      {
        id: uuidv4(),
        parentPath: "pages",
        title: "Check out",
        childrenPath: "/checkout",
      },
      {
        id: uuidv4(),
        parentPath: "pages",
        title: "Pricing Plan",
        childrenPath: "/pricing",
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
        childrenPath: "/signin",
      },
      {
        id: uuidv4(),
        title: "Sign Up",
        childrenPath: "/signup",
      },
      {
        id: uuidv4(),
        title: "Reset Password",
        childrenPath: "/reset-password",
      },
      {
        id: uuidv4(),
        title: "Faq",
        childrenPath: "/faq",
      },
      {
        id: uuidv4(),
        title: "Contact",
        childrenPath: "/contact",
      },
      {
        id: uuidv4(),
        title: "Show Details",
        childrenPath: "/product-details",
      },
      {
        id: uuidv4(),
        title: "Cart Page",
        childrenPath: "/cart",
      },
      {
        id: uuidv4(),
        title: "Privacy policy",
        childrenPath: "/privacy",
      },
      {
        id: uuidv4(),
        title: "404 Page",
        childrenPath: "/error",
      },
    ],
  },
];
