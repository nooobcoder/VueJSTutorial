import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './pages/TeamsList.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';
import NotFound from './pages/NotFound.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './pages/UsersList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'root', path: '/', redirect: '/teams' },
    {
      path: '/teams',
      name: 'teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        } // params are passed as props when props:true
      ]
    }, // your-url/teams => TeamsList
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.info('users beforeEnter\n', to, from, next);
        next();
      }
    }, // your-url/users => UsersList
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, __, savedPosition) {
    return savedPosition
      ? savedPosition
      : { left: 0, top: 0, behavior: 'smooth' };
  }
});

// https://www.router.vuejs.org/guide/advanced/navigation-guards.html
// A guarding middleware
router.beforeEach((to, from, next) => {
  console.table('Global beforeeach\n ', to, from);
  if (to.meta.needsAuth) {
    console.log('Needs auth!');
  }
  next();
  // if (to.name === 'team-members') {
  //   next(); // passing false as a parameter to 'next' will block the navigation
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
});

router.afterEach((to, from) => {
  // Send analytics data
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;
