import {
  FETCH_REACTID_BEGIN,
  FETCH_REACTID_SUCCESS,
  FETCH_REACTID_FAILURE,
} from './types';

export const fetchReactidBegin = () => ({
  type: FETCH_REACTID_BEGIN,
});

export const fetchReactidSuccess = reactid => ({
  type: FETCH_REACTID_SUCCESS,
  payload: { reactid },
});

export const fetchReactidFailure = error => ({
  type: FETCH_REACTID_FAILURE,
  payload: { error },
});

function fakeGetReactid() {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          reactid: [
            {
              id: 0,
              formacion: 'Cursos',
              count: 200,
            },
            {
              id: 1,
              formacion: 'Diplomados',
              count: 160,
            },
            {
              id: 2,
              formacion: 'Seminarios y conferencias',
              count: 60,
            },
            {
              id: 3,
              formacion: 'Vendedores',
              count: 500,
            },
            {
              id: 4,
              formacion: 'Ganadores',
              count: 200,
            },
          ],
        }),
      1000
    );
  });
}

export function fetchReactid() {
  return dispatch => {
    dispatch(fetchReactidBegin());
    return fakeGetReactid()
      .then(json => {
        dispatch(fetchReactidSuccess(json.reactid));
        return json.reactid;
      })
      .catch(error => dispatch(fetchReactidFailure(error)));
  };
}
