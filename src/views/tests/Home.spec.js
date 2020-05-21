import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import Home from '../Home';

describe('Home', () => {
  
  it('should match the Home html', () => {
    const wrapper = shallowMount(Home, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    })
    expect(wrapper.element).toMatchSnapshot();
  });
  
});
