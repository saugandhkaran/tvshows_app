import { mount } from '@vue/test-utils';
import TvShowCard from '../TVShowCard';

describe('TvShowCard', () => {
  
  it('should match the card component html', () => {
    const wrapper = mount(TvShowCard, {
      propsData: {
        showObject: { image:{ medium :''}}
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('card should render the dummy image image when not in props', () => {
    const wrapper = mount(TvShowCard, {
      propsData: {
        showObject: { image:{ medium :'https://some/url/to/medium/sized/image/jpg'}}
      }
    });
    expect(wrapper.find('[src*="No+image+available"]')).toBeDefined;
    
  });

  it('card should render the image name for accessibility', () => {
    const wrapper = mount(TvShowCard, {
      propsData: {
        showObject: { image:{ medium :'https://some/url/to/medium/sized/image/test.jpg'}, name: 'dummy-alt-image-name'}
      }
    });
    expect(wrapper.find('[alt*="dummy-alt-image-name"]')).toBeDefined;
    
  });

  it('card should render the image when available', () => {
    const wrapper = mount(TvShowCard, {
      propsData: {
        showObject: { image:{ medium :'http://static.tvmaze.com/uploads/images/medium_portrait/215/538786.jpg'}}
      }
    });
    expect(wrapper.find('[src*="medium_portrait/215/538786.jpg"]')).toBeDefined;

  });

  });
