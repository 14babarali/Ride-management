/ride-management-website
│
├── /client                     # React client side
│   ├── /public
│   ├── /src
│   │   ├── /components
│   │   │   ├── Login.js         # Login form component
│   │   │   └── Header.js        # Header component
│   │   ├── App.js              # Main React application
│   │   └── index.js            # Entry point for React app
│   └── package.json            # React project dependencies and scripts
│
├── /Src                     # Express API server
│   ├── /controllers
│   │   └── authController.js   # Handle user authentication
│   ├── /middleware
│   │   └── verifyToken.js      # JWT verification middleware
│   ├── /models
│   │   └── User.js             # User model (MySQL schema)
│   ├── /routes
│   │   └── authRoutes.js       # Authentication routes (login)
│   ├── /config
│   │   └── db.js               # MySQL database connection
│   ├── server.js               # Main server file
│   └── package.json            # Express server dependencies and scripts
├── README.md                   # Project documentation
└── .gitignore                  # Git ignore file
#   R i d e - m a n a g e m e n t  
 #   R i d e - m a n a g e m e n t  
 