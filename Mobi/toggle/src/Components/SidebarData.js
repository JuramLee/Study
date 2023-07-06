import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    isToggled: false,
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        isChecked: false,
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        isChecked: false,
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Reports',
    path: '/reports',
    isToggled: false,
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        isChecked: false,
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        isChecked: false,
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        isChecked: false,
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Products',
    path: '/products',
    isToggled: false,
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: 'Team',
    path: '/team',
    isToggled: false,
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: 'Messages',
    path: '/messages',
    isToggled: false,
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        isChecked: false,
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        isChecked: false,
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Support',
    path: '/support',
    isToggled: false,
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
