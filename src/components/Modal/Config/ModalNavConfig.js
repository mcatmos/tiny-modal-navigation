import React from 'react';
import AssignLP from '../../Forms/AssignLP';
import AssignMembers from '../../Forms/AssignMembers';
import AssignCommunities from '../../Forms/AssignCommunities';

const modalNavConfig = (nextScene, previousScene, close) => {
  return {
    assignLP: {
      component: <AssignLP />,
      buttons: [
        {
          label: 'Next',
          onClick: () => nextScene()
        }
      ]
    },
    assignMembers: {
      component: <AssignMembers />,
      buttons: [
        {
          label: 'Back',
          onClick: () => previousScene()
        },
        {
          label: 'Next',
          onClick: () => nextScene()
        }
      ]
    },
    assignCommunities: {
      component: <AssignCommunities />,
      buttons: [
        {
          label: 'Back',
          onClick: () => previousScene()
        },
        {
          label: 'Done',
          onClick: () => close()
        }
      ]
    }
  };
};

export default modalNavConfig;
