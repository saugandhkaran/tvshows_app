import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import ShowDetails from '../ShowDetails';


const localVue = createLocalVue();
localVue.use(VueRouter)
const router = new VueRouter();

describe('ShowDetails', () => {
  
  it('should match the ShowDetails html', () => {
    const wrapper = shallowMount(ShowDetails, {
      localVue,
      router,
      stubs: {
        'tv-show-details': 'tv-show-details',
      },
    })
    expect(wrapper.element).toMatchSnapshot();
  });
  
});
