import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import Header from '../Header';

describe('header', () => {
  
  it('should match the header html', () => {
    const wrapper = shallowMount(Header, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    })
    expect(wrapper.element).toMatchSnapshot();
  });
  
});
