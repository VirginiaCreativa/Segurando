import {
  FETCH_NUESTROSUSUARIOS_BEGIN,
  FETCH_NUESTROSUSUARIOS_SUCCESS,
  FETCH_NUESTROSUSUARIOS_FAILURE,
} from './types';

export const fetchNuestrosUsuariosBegin = () => ({
  type: FETCH_NUESTROSUSUARIOS_BEGIN,
});

export const fetchNuestrosUsuariosSuccess = nusuarios => ({
  type: FETCH_NUESTROSUSUARIOS_SUCCESS,
  payload: { nusuarios },
});

export const fetchNuestrosUsuariosFailure = error => ({
  type: FETCH_NUESTROSUSUARIOS_FAILURE,
  payload: { error },
});

function fakeGetNuestrosUsuarios() {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          nuestrosusuearios: [
            {
              id: 1,
              name: 'Leanne Graham',
              company: 'Suramericana',
              city: 'Bogóta',
              job: 'Jefa Seguro',
              image: 'usuario_1.jpg',
              formaciones: [
                'Curso Salud 1',
                'Curso Salud 2',
                'Curso Salud 3',
                'Curso Salud 4',
              ],
            },
            {
              id: 2,
              name: 'Ervin Howell',
              company: 'Epm',
              city: 'Medellín',
              job: 'Asesor de Seguros Corporativo',
              image: 'usuario_2.jpg',
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
              job: 'Vicepresidente Seguros Corporativo',
              image: 'usuario_3.jpg',
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
              image: 'usuario_4.jpg',
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
              image: 'usuario_5.jpg',
              formaciones: [
                'Curso Movilidad 1',
                'Diplomado Movilidad 2',
                'Conferencia Movilidad 3',
                'Curso Movilidad 4',
              ],
            },
            {
              id: 6,
              name: 'KGlenna Reichert',
              company: 'Construción S.A.',
              city: 'Cali',
              job: 'Vicepresidenta Seguros',
              image: 'usuario_6.jpg',
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
  return dispatch => {
    dispatch(fetchNuestrosUsuariosBegin());
    return fakeGetNuestrosUsuarios()
      .then(json => {
        dispatch(fetchNuestrosUsuariosSuccess(json.nusuarios));
        return json.nusuarios;
      })
      .catch(error => dispatch(fetchNuestrosUsuariosFailure(error)));
  };
}
