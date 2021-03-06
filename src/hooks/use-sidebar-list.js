import AddIcon from "@material-ui/icons/Add";
import PeopleIcon from "@material-ui/icons/People";
import Person from "@material-ui/icons/Person";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import React from "react";

export const useSidebarList = user => {
  const { role, id, firstName, lastName, email } = user;

  const sidebarItems = {
    isc_employee: [
      {
        text: "List all immigrants",
        icon: <PeopleIcon />,
        route: "/isc/immigrants",
        key: "listAllImmigrants"
      },
      { text: "Add immigrant", icon: <AddIcon />, route: "/isc/add-immigrant" },
      {
        text: "Add ISC employee",
        icon: <AddIcon />,
        route: "/isc/add-isc-employee",
        key: "addIscEmployee"
      },
      {
        text: "My Profile",
        icon: <Person />,
        route: "/isc/profile",
        key: "iscProfile"
      }
    ],
    immigrant: [
      {
        text: "My Modules",
        icon: <ViewModuleIcon />,
        route: {
          pathname: `/immigrant/view-modules/${email}`,
          state: { firstName, lastName, prNo: id }
        },
        key: "viewModules"
      },
      {
        text: "My Profile",
        icon: <Person />,
        route: "/immigrant/profile",
        key: "immigrantProfile"
      }
    ]
  };

  return sidebarItems[role] ? sidebarItems[role] : [];
};
