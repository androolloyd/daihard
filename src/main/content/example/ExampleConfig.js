import Example from "./Example";
import Test from "./Test"

export const ExampleConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: "/example",
      component: Example
    },
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
