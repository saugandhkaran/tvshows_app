import axios from 'axios';
import { mount } from '@vue/test-utils'
import TvShowList from '../TvShowList';

jest.mock('axios');

describe('Searchshow renderless comp', () => {

  let wrapper;

  const mockedCompData = {
    api: 'api/url',
      data: [],
      error: null,
      params: {
        params: {
          page: 0
        }
      },
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
      wrapper = mount(TvShowList, {
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

    it('should mount the renderless TVShowList component ', () => {
      const wrapper = mount(TvShowList, {
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


    it('should fetch the tv shows on mount ', async () => {
      expect(wrapper.vm.data).toEqual('mf');
    });

  });

  describe('on mount/ api failure', () => {
    beforeEach(() => {
      jest.spyOn(axios, 'get').mockRejectedValue({ 'message': 'errormf' });
      wrapper = mount(TvShowList, {
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

    it('should not fetch the tv shows on mount ', async () => {
      expect(wrapper.vm.error).toEqual('errormf');
    });
  });
});