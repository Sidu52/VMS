export const navLinks = [
  {
    name: 'Video',
    path: '/video',
    sidebar: [],
  },
  {
    name: 'Access Control',
    path: '/',
    sidebar: [],
  },
  {
    name: 'Intelligent Analytics',
    path: '/',
    sidebar: [],
  },
  {
    name: "Attendance",
    path: "/",
     sidebar: [],
  },
  {
    name: "On-Board Monitoring",
    path: "/",
     sidebar: [],
  },
  {
    name: "Account and Security",
    path: "/",
     sidebar: [],
  },
  {
    name: "Event and Alarm",
    path: "/",
     sidebar: [],
  },
  {
    name: "System",
    path: "/",
     sidebar: [],
  },
  {
    name: "Devices",
    path: "/devices",
     sidebar: [{
      label: 'Devices And Server',
      path: '/devices/devices-or-server',
      children: [
        { label: 'Enrolling Device', path: '/devices/devices-or-server/enrolling-device' },
        { label: 'Access Controll Device', path: '/devices/devices-or-server/access-device' },
      ],
    },
  ],
  },
  {
    name: "Maintenance",
    path: "/",
     sidebar: [],
  },
  {
    name: "Visual Map",
    path: "/",
     sidebar: [],
  },
];

