import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Search from '../Search';

const localVue = createLocalVue();
localVue.use(VueRouter)
const router = new VueRouter();

describe('Search', () => {
  
  it('should match the Search html', () => {
    const wrapper = shallowMount(Search, {
      stubs: {
        'search-show': 'search-show',
      },
    })
    expect(wrapper.element).toMatchSnapshot();
  });
  
  it('should route to path on click of TV show card', () => {
    const wrapper = shallowMount(Search, {
      localVue,
      router,
      stubs: {
        'search-show': 'search-show',
      },
      $route: {
        path: '/test'
      }
    });
    wrapper.vm.goToShowDetail('1');
    expect(wrapper.vm.$route.path).toEqual('/browse/1')
  });
});
