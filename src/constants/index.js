import { eventdetail, event1, event2  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    titleLoggedIn:"Home",
    link: "../",
    linkLoggedIn: "../",

  },
  {
    id: "findevents",
    title: "Find Events",
    titleLoggedIn: "Find Events",
    link: "../searchevents",

  },
  {
    id: "create_events",
    title: "Create Events",
    titleLoggedIn: "Create Events",
    link: "../createevent",
  },
  {
    id: "login",
    title: "Log In",
    titleLoggedIn: "Log In",
    link: "../signin",
    loggedInOnly: true, 
  },

  // {
  //   id: "signup",
  //   title: "Sign Up",
  //   link: "./signup",

  // },
];





export const customersProfile =[
  {
    id: "account-1",
    title: "My Tickets",
    link: "./bookings",
    
  },
  {
    id: "account-2",
    title: "Profile",
    link: "./profile",
  },
  {
    id: "account-3",
    title: "My Cards",
    link: "./billings",
  },
  {
    id: "account-4",
    title: "Payment History",
    link: "./payment-history",
  },
];

export const images = [
  {
    id:'1',
    img: eventdetail,
  }
  // {
  //   id:'2',
  //   img2: eventdetail2,
  // }

];

export const eventinfo = [
  {
    id: 'info-1',
    title: "VALENTINE SPECIAL: ALL-WHITE PRIVATE BEACH PARTY",
    about: 'Get ready to celebrate love in style at our exclusive Valentine Special: All-White Private Beach Party, where you can dance, mingle, and cre',
    date: 'Saturday, February 17',
    datentime: 'Saturday, February 17 . 12:00pm',
    location: 'South Pole, Love Zone Arena, somewhere in lala land',
    time: '11 hours',
    organizer: 'Super Eagles',
  },
]

export const ticketTypes = [
  {
      title: "Afrotix",
      ticketDetails: [

          { class: "Regular", price: "500,000.00", quantity: 1 },
          { class: "Vip", price: "500", quantity: 1 },
          { class: "Exclusive", price: "500", quantity: 1 }
      ]

  }
];

export const event = [
  {
    id: 'event-1',
    img: event1,
    title: 'The Jewellery Workshop',
    date: 'Sat, Feb 11 . 12:00pm',
    price: 'from $15.00',
    publisher: 'Flytime Ent',

  },
  {
    id: 'event-2',
    img: event1,
    title: 'The  Workshop',
    date: 'Sat, Feb 21 . 12:00pm',
    price: 'from $10.00',
    publisher: 'Flytime Ent',

  },
  {
    id: 'event-3',
    img: event2,
    title: 'LAGOS FREEDOM FEST 2024',
    date: 'Sat, Feb 21 . 12:00pm',
    price: 'from $10.00',
    publisher: 'Flytime Ent',

  },
  {
    id: 'event-4',
    img: event2,
    title: 'O2 Arena FREEDOM FEST 2024',
    date: 'Sat, Feb 21 . 12:00pm',
    price: 'from $10.00',
    publisher: 'Flytime Ent',

  },
  {
    id: 'event-5',
    img: event2,
    title: 'O2 Arena FREEDOM FEST 2024',
    date: 'Sat, Feb 21 . 12:00pm',
    price: 'from $10.00',
    publisher: 'Flytime Ent',

  },
  {
    id: 'event-6',
    img: event2,
    title: 'O2 Arena FREEDOM FEST 2024',
    date: 'Sat, Feb 21 . 12:00pm',
    price: 'from $10.00',
    publisher: 'Flytime Ent',

  },
  {
    id: 'event-7',
    img: event2,
    title: 'O2 Arena FREEDOM FEST 2024',
    date: 'Sat, Feb 21 . 12:00pm',
    price: 'from $10.00',
    publisher: 'Flytime Ent',

  },
  {
    id: 'event-8',
    img: event2,
    title: 'O2 Arena FREEDOM FEST 2024',
    date: 'Sat, Feb 21 . 12:00pm',
    price: 'from $10.00',
    publisher: 'Flytime Ent',

  },

];
// export const features = [
//   {
//     id: "feature-1",
//     icon: star,
//     title: "Rewards",
//     content:
//       "The best credit cards offer some tantalizing combinations of promotions and prizes",
//   },
//   {
//     id: "feature-2",
//     icon: shield,
//     title: "100% Secured",
//     content:
//       "We take proactive steps make sure your information and transactions are secure.",
//   },
//   {
//     id: "feature-3",
//     icon: send,
//     title: "Balance Transfer",
//     content:
//       "A balance transfer credit card can save you a lot of money in interest charges.",
//   },
// ];

// export const feedback = [
//   {
//     id: "feedback-1",
//     content:
//       "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
//     name: "Herman Jensen",
//     title: "Founder & Leader",
//     img: people01,
//   },
//   {
//     id: "feedback-2",
//     content:
//       "Money makes your life easier. If you're lucky to have it, you're lucky.",
//     name: "Steve Mark",
//     title: "Founder & Leader",
//     img: people02,
//   },
//   {
//     id: "feedback-3",
//     content:
//       "It is usually people in the money business, finance, and international trade that are really rich.",
//     name: "Kenn Gallagher",
//     title: "Founder & Leader",
//     img: people03,
//   },
// ];

// export const stats = [
//   {
//     id: "stats-1",
//     title: "User Active",
//     value: "3800+",
//   },
//   {
//     id: "stats-2",
//     title: "Trusted by Company",
//     value: "230+",
//   },
//   {
//     id: "stats-3",
//     title: "Transaction",
//     value: "$230M+",
//   },
// ];

export const footerLinks = [
  {
    titleId: "head1",
    title: "Useful Links",
    links: [
      {
        id: 1,
        name: "Content",
        link: "#",
      },
      {
        id: 2,
        name: "How it Works",
        link: "#",
      },
      {
        id: 3,
        name: "Create an event",
        link: "#",
      },
      {
        id: 4,
        name: "Explore Events",
        link: "#",
      },
      {
        id: 5,
        name: "Terms & Services",
        link: "#",
      },
    ],
  },
  {
    titleId: "head2",
    title: "Community",
    links: [
      {
        id: 6,
        name: "Help Center",
        link: "#",
      },
      {
        id: 7,
        name: "Partners",
        link: "#",
      },
      {
        id: 8,
        name: "Suggestions",
        link: "#",
      },
      {
        id: 9,
        name: "Blog",
        link: "#",
      },
      {
        id: 10,
        name: "Newsletters",
        link: "#",
      },
    ],
  },
  {
    titleId: "head3",
    title: "Partner",
    links: [
      {
        id: 11,
        name: "Our Partner",
        link: "#",
      },
      {
        id: 12,
        name: "Become a Partner",
        link: "#",
      },
    ],
  },
];

// export const socialMedia = [
//   {
//     id: "social-media-1",
//     icon: instagram,
//     link: "https://www.instagram.com/",
//   },
//   {
//     id: "social-media-2",
//     icon: facebook,
//     link: "https://www.facebook.com/",
//   },
//   {
//     id: "social-media-3",
//     icon: twitter,
//     link: "https://www.twitter.com/",
//   },
//   {
//     id: "social-media-4",
//     icon: linkedin,
//     link: "https://www.linkedin.com/",
//   },
// ];

// export const clients = [
//   {
//     id: "client-1",
//     logo: airbnb,
//   },
//   {
//     id: "client-2",
//     logo: binance,
//   },
//   {
//     id: "client-3",
//     logo: coinbase,
//   },
//   {
//     id: "client-4",
//     logo: dropbox,
//   },
// ];