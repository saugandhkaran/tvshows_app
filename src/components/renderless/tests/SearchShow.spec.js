import axios from 'axios';
import { mount } from '@vue/test-utils'
import SearchShow from '../SearchShow';

jest.mock('axios');

describe('Searchshow renderless comp', () => {

  let axiosGet;
  const mockedCompData = {
    api: 'API',
    data: [],
    error: null,
    loading: false,
    paramsObject: {
      params: {
        q: ''
      }
    }
  };
  const mockedScopedSlots = {
    data: [],
    searchShowDetails: '',
    error: '',
    loading: false
  };

  beforeEach(() => {
    axiosGet = jest.spyOn(axios, 'get');
  });

  afterEach(() => {
    jest.restoreAllMocks();
    // jest.resetAllMocks();
  })

  it('should mount the renderless search component ', () => {
    const wrapper = mount(SearchShow, {
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

  it('should return the resolved response when search search api called ', async () => {
    axiosGet.mockResolvedValue({'data': 'resolvedmf'})
    const wrapper = mount(SearchShow, {
      data: () => {
        return mockedCompData
      },
      scopedSlots: {
        default: () => {
          return mockedScopedSlots
        }
      }
    });
    await wrapper.vm.searchShowDetails('test');
    expect(wrapper.vm.data).toEqual('resolvedmf');
  });
  
  it('should return the rejected response when search search api called ', async () => {
    axiosGet.mockRejectedValue({'message': 'rejectedmf'})
    const wrapper = mount(SearchShow, {
      data: () => {
        return mockedCompData
      },
      scopedSlots: {
        default: () => {
          return mockedScopedSlots
        }
      }
    });
    await wrapper.vm.searchShowDetails('test');
    expect(wrapper.vm.error).toEqual('rejectedmf');
  });

  it('should not do anything when empty search query ', async () => {
    const wrapper = mount(SearchShow, {
      data: () => {
        return mockedCompData
      },
      scopedSlots: {
        default: () => {
          return mockedScopedSlots
        }
      }
    });
    await wrapper.vm.searchShowDetails();
    expect(wrapper.vm.error).toBeNull;
  });

});