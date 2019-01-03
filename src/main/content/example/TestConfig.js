import Test from "./Test";

export const TestConfig = {
  settings: {
    layout: {
      config: {
        toolbar: {
          display: false
        },
        footer: {
          display: false
        }
      }
    }
  },
  routes: [
    {
      path: "/test",
      component: Test
    }
  ]
};

/**
 * Lazy load Example
 */
/*
import FuseLoadable from '@fuse/components/FuseLoadable/FuseLoadable';

export const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: FuseLoadable({
                loader: () => import('./Example')
            })
        }
    ]
};
*/
