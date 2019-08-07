import {
  FETCH_NUESTROSUSUARIOS_BEGIN,
  FETCH_NUESTROSUSUARIOS_SUCCESS,
  FETCH_NUESTROSUSUARIOS_FAILURE,
} from './types';

export const fetchNUsuariosBegin = () => ({
  type: FETCH_NUESTROSUSUARIOS_BEGIN,
});

export const fetchNUsuariosSuccess = usuarios => ({
  type: FETCH_NUESTROSUSUARIOS_SUCCESS,
  payload: { usuarios },
});

export const fetchNUsuariosFailure = error => ({
  type: FETCH_NUESTROSUSUARIOS_FAILURE,
  payload: { error },
});

function fakeGetNuestrosUsuarios() {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          usuarios: [
            {
              id: 1,
              name: 'Leanne Graham',
              company: 'Suramericana',
              city: 'Bogóta',
              job: 'Jefa Seguro',
              image: 'https://randomuser.me/api/portraits/women/85.jpg',
              formaciones: [
                'Conferencia Salud 1',
                'Diplomado Salud 2',
                'Curso Salud 3',
                'Seminario Salud 4',
              ],
            },
            {
              id: 2,
              name: 'Ervin Howell',
              company: 'Epm',
              city: 'Medellín',
              job: 'Asesor de Seguros Corporativo',
              image: 'https://randomuser.me/api/portraits/men/61.jpg',
              formaciones: [
                'Curso Financias 1',
                'Seminario Financias 2',
                'Curso Financias 3',
                'Curso Financias 4',
              ],
            },
            {
              id: 3,
              name: 'Victora Plains',
              company: 'Isa',
              city: 'Medellín',
              job: 'Vicepresidenta Seguros Corporativo',
              image: 'https://randomuser.me/api/portraits/women/0.jpg',
              formaciones: [
                'Diplomado Financias 1',
                'Curso Financias 2',
                'Curso Financias 3',
                'Seminario Financias 4',
              ],
            },
            {
              id: 4,
              name: 'Clementine Bauch',
              company: 'Toyota',
              city: 'Bogóta',
              job: 'Vicepresidenta Seguros Corporativo',
              image: 'https://randomuser.me/api/portraits/women/36.jpg',
              formaciones: [
                'Curso ARL 1',
                'Curso ARL 2',
                'Diplomado ARL 3',
                'Diplomado ARL 4',
              ],
            },
            {
              id: 5,
              name: 'Kurtis Weissna',
              company: 'Mazda',
              city: 'Bogóta',
              job: 'Vicepresidente Seguros',
              image: 'https://randomuser.me/api/portraits/men/13.jpg',
              formaciones: [
                'Curso Movilidad 1',
                'Diplomado Movilidad 2',
                'Conferencia Movilidad 3',
                'Curso Movilidad 4',
              ],
            },
            {
              id: 6,
              name: 'Glenna Reichert',
              company: 'Construción S.A.',
              city: 'Cali',
              job: 'Vicepresidenta Seguros',
              image: 'https://randomuser.me/api/portraits/women/61.jpg',
              formaciones: [
                'Curso Vivienda 1',
                'Diplomado Vivienda 2',
                'Conferencia Vivienda 3',
                'Curso Vivienda 4',
              ],
            },
          ],
        }),
      1000
    );
  });
}

export function fetchNuestrosUsuarios() {
  return async dispatch => {
    dispatch(fetchNUsuariosBegin());
    try {
      const json = await fakeGetNuestrosUsuarios();
      dispatch(fetchNUsuariosSuccess(json.usuarios));
      return json.usuarios;
    } catch (error) {
      return dispatch(fetchNUsuariosFailure(error));
    }
  };
}
