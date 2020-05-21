import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Browse from '../Browse';

const localVue = createLocalVue();
localVue.use(VueRouter)
const router = new VueRouter();

describe('Browse', () => {
  it('should match the Browse html', () => {
    const wrapper = shallowMount(Browse, {
      stubs: {
        'tv-show-list': 'tv-show-list',
      },
    })
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should route to path on click of TV show card', () => {
    const wrapper = shallowMount(Browse, {
      localVue,
      router,
      stubs: {
        'tv-show-list': 'tv-show-list',
      },
      $route: {
        path: '/test'
      }
    });
    wrapper.vm.goToShowDetailsPage('1');
    expect(wrapper.vm.$route.path).toEqual('/browse/1')
  });
});
