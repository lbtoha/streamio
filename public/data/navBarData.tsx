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
    icon: <IconSmartHome />,
    menuItems: [
      {
        id: uuidv4(),
        title: "Home One",
        dropDownPath: "/",
      },
      {
        id: uuidv4(),
        title: "Home Two",
        dropDownPath: "/home-two",
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
    path: "/podcasts",
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
    icon: <IconClipboardText />,
    menuItems: [
      {
        id: uuidv4(),
        title: "Genres",
        dropDownPath: "/genres",
      },
      {
        id: uuidv4(),
        title: "Moods",
        dropDownPath: "/moods",
      },
      {
        id: uuidv4(),
        title: "Trending",
        dropDownPath: "/trending",
      },
      {
        id: uuidv4(),
        title: "Popular",
        dropDownPath: "/artists",
      },
    ],
  },
  {
    id: uuidv4(),
    menuTitle: "Others",
    className: "d-xl-none",
    icon: <IconClipboardText />,
    menuItems: [
      {
        id: uuidv4(),
        title: "Sing In",
        dropDownPath: "/signin",
      },
      {
        id: uuidv4(),
        title: "Sign Up",
        dropDownPath: "/signup",
      },
      {
        id: uuidv4(),
        title: "Reset Password",
        dropDownPath: "/reset-password",
      },
      {
        id: uuidv4(),
        title: "Faq",
        dropDownPath: "/faq",
      },
      {
        id: uuidv4(),
        title: "Contact",
        dropDownPath: "/contact",
      },
      {
        id: uuidv4(),
        title: "Product Details",
        dropDownPath: "/product-details",
      },
      {
        id: uuidv4(),
        title: "Cart Page",
        dropDownPath: "/cart",
      },
      {
        id: uuidv4(),
        title: "Privacy policy",
        dropDownPath: "/privacy",
      },
      {
        id: uuidv4(),
        title: "404 Page",
        dropDownPath: "/error",
      },
    ],
  },
  {
    id: uuidv4(),
    menuTitle: "Pages",
    icon: <IconClipboardText />,
    menuItems: [
      {
        id: uuidv4(),
        title: "Blog Page",
        dropDownPath: "/blog",
      },
      {
        id: uuidv4(),
        title: "Blog Details",
        dropDownPath: "/blog-details",
      },
      {
        id: uuidv4(),
        title: "Show Page",
        dropDownPath: "/freature-show",
      },
      {
        id: uuidv4(),
        title: "Show Details",
        dropDownPath: "/show-details",
      },
      {
        id: uuidv4(),
        title: "Product Page",
        dropDownPath: "/product",
      },
      {
        id: uuidv4(),
        title: "Product Details",
        dropDownPath: "/product-details",
      },
      {
        id: uuidv4(),
        title: "Cart Page",
        dropDownPath: "/cart",
      },
      {
        id: uuidv4(),
        title: "Check out",
        dropDownPath: "/checkout",
      },
      {
        id: uuidv4(),
        title: "Pricing Plan",
        dropDownPath: "/pricing",
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
        dropDownPath: "/signin",
      },
      {
        id: uuidv4(),
        title: "Sign Up",
        dropDownPath: "/signup",
      },
      {
        id: uuidv4(),
        title: "Reset Password",
        dropDownPath: "/reset-password",
      },
      {
        id: uuidv4(),
        title: "Faq",
        dropDownPath: "/faq",
      },
      {
        id: uuidv4(),
        title: "Contact",
        dropDownPath: "/contact",
      },
      {
        id: uuidv4(),
        title: "Product Details",
        dropDownPath: "/product-details",
      },
      {
        id: uuidv4(),
        title: "Cart Page",
        dropDownPath: "/cart",
      },
      {
        id: uuidv4(),
        title: "Privacy policy",
        dropDownPath: "/privacy",
      },
      {
        id: uuidv4(),
        title: "404 Page",
        dropDownPath: "/error",
      },
    ],
  },
];
