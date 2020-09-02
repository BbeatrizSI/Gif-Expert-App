import React from 'react';
import { shallow } from 'enzyme';
import { GifItem } from '../../components/GifItem';

describe('Pruebas en <GifItem />', () => {
  test('debe de mostrar el componente correctamente', () => {
    const wrapper = shallow(<GifItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
