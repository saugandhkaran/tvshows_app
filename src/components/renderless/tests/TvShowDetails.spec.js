import axios from 'axios';
import { mount } from '@vue/test-utils'
import TvShowDetails from '../TvShowDetails';

jest.mock('axios');

describe('Searchshow renderless comp', () => {

  let wrapper;

  const mockedCompData = {
    api: 'api/url',
    data: [{
      name: '',
      rating: '',
      schedule: '',
      runtime: ''
    }],
    error: null,
    loading: false
  };

  const mockedScopedSlots = {
    data: [],
    error: '',
    loading: false
  };

  describe('on mount/ api success', () => {

    beforeEach(() => {
      jest.spyOn(axios, 'get').mockResolvedValue({ 'data': 'mf' });
      wrapper = mount(TvShowDetails, {
        propsData: {
          showId: '1234',
        },
        data: () => {
          return mockedCompData
        },
        scopedSlots: {
          default: () => {
            return mockedScopedSlots
          }
        }
      });

    });

    afterEach(() => {
      jest.restoreAllMocks();
    })

    it('should mount the renderless TVShowdetails component ', () => {
      const wrapper = mount(TvShowDetails, {
        propsData: {
          showId: '1234',
        },
        data: () => {
          return mockedCompData
        },
        scopedSlots: {
          default: () => {
            return mockedScopedSlots
          }
        }
      });
      expect(wrapper.text()).toEqual('');
    });


    it('should fetch the tv show details on mount ', async () => {
      expect(wrapper.vm.data).toEqual('mf');
    });

  });

  describe('on mount/ api failure', () => {
    beforeEach(() => {
      jest.spyOn(axios, 'get').mockRejectedValue({ 'message': 'errormf' });
      wrapper = mount(TvShowDetails, {
        propsData: {
          showId: '1234',
        },
        data: () => {
          return mockedCompData
        },
        scopedSlots: {
          default: () => {
            return mockedScopedSlots
          }
        }
      });
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should not fetch the tv show details on mount ', async () => {
      expect(wrapper.vm.error).toEqual('errormf');
    });
  });
});