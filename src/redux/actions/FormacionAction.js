import {
  FETCH_FORMACION_BEGIN,
  FETCH_FORMACION_SUCCESS,
  FETCH_FORMACION_FAILURE,
} from './types';

export const fetchFormacionBegin = () => ({
  type: FETCH_FORMACION_BEGIN,
});

export const fetchFormacionSuccess = formacion => ({
  type: FETCH_FORMACION_SUCCESS,
  payload: { formacion },
});

export const fetchFormacionFailure = error => ({
  type: FETCH_FORMACION_FAILURE,
  payload: { error },
});

function fakeGetFormacions() {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          formacion: [
            {
              id: 0,
              formacion: 'curso',
              categoria: 'vida',
              title: 'Claims Made Iberoamérica',
              image: 'formacion_5.jpg',
              description:
                'Minim anim et dolor exercitation id sint nisi consequat mollit sint cillum occaecat elit. Ullamco ullamco cillum aliqua reprehenderit ex.',
              date: '3 de Agosto de 2019',
            },
            {
              id: 1,
              formacion: 'diplomado',
              categoria: 'salud',
              title: 'Administración de Riesgos en Salud',
              image: 'formacion_4.jpg',
              description:
                'Minim anim et dolor exercitation id sint nisi consequat mollit sint cillum occaecat elit. Ullamco ullamco cillum aliqua reprehenderit ex.',
              date: '3 a 6 de Agosto de 2019',
            },
            {
              id: 2,
              formacion: 'diplomado',
              categoria: 'financias',
              title:
                'Conceptos Básicos de los Pagos Salariales y no Salariales',
              image: 'formacion_6.jpg',
              description:
                'Minim anim et dolor exercitation id sint nisi consequat mollit sint cillum occaecat elit. Ullamco ullamco cillum aliqua reprehenderit ex.',
              date: '10 a 16 de Agosto de 2019',
            },
            {
              id: 3,
              formacion: 'diplomado',
              categoria: 'ARL',
              title: 'Administración de Propiedad Horizontal con Énfasis',
              image: 'formacion_1.jpg',
              description:
                'Minim anim et dolor exercitation id sint nisi consequat mollit sint cillum occaecat elit. Ullamco ullamco cillum aliqua reprehenderit ex.',
              date: '14 de Agosto de 2019',
            },
            {
              id: 4,
              formacion: 'conferencia',
              categoria: 'movilidad',
              title: 'Seguro de Responsabilidad Civil',
              image: 'formacion_2.jpg',
              description:
                'Minim anim et dolor exercitation id sint nisi consequat mollit sint cillum occaecat elit. Ullamco ullamco cillum aliqua reprehenderit ex.',
              date: '14 de Agosto de 2019',
            },
            {
              id: 5,
              formacion: 'curso',
              categoria: 'financias',
              title: 'Seguro de Responsabilidad Civil',
              image: 'formacion_3.jpg',
              description:
                'Minim anim et dolor exercitation id sint nisi consequat mollit sint cillum occaecat elit. Ullamco ullamco cillum aliqua reprehenderit ex.',
              date: '22 de Agosto de 2019',
            },
          ],
        }),
      1000
    );
  });
}

export function fetchFormacion() {
  return async dispatch => {
    dispatch(fetchFormacionBegin());
    try {
      const json = await fakeGetFormacions();
      dispatch(fetchFormacionSuccess(json.formacion));
      return json.formacion;
    } catch (error) {
      return dispatch(fetchFormacionFailure(error));
    }
  };
}
