import axios from 'axios'

const JSON_HEADERS = {
  'Content-Type': 'application/json',
}

const DEFUALT_AUTH_HEADER = {}

export async function post(path, params = {}, data, headers = DEFUALT_AUTH_HEADER) {
  const response = await axios({
    method: 'post',
    url: path,
    params,
    data,
    headers: {
      ...JSON_HEADERS,
      ...headers,
    },
    responseType: 'json',
  })
    .then((res) => res.data)
    .catch((e) => {
      return {
        hasError: true,
        ...e,
      }
    })

  return response
}

export async function get(path, params = {}, headers = DEFUALT_AUTH_HEADER) {
  const response = await axios({
    method: 'get',
    url: path,
    headers: {
      ...JSON_HEADERS,
      ...headers,
    },
    params,
    responseType: 'json',
  })
    .then((res) => res.data)
    .catch((e) => {
      return {
        hasError: true,
        ...e,
      }
    })

  return response
}

export async function del(path, params = {}, data, headers = DEFUALT_AUTH_HEADER) {
  const response = await axios({
    method: 'delete',
    url: path,
    params,
    data,
    headers: {
      ...JSON_HEADERS,
      ...headers,
    },
    responseType: 'json',
  })
    .then((res) => res.data)
    .catch((e) => {
      return {
        hasError: true,
        ...e,
      }
    })

  return response
}

export async function download(path, params = {}, headers = DEFUALT_AUTH_HEADER) {
  const response = await axios({
    method: 'GET',
    url: path,
    headers: {
      ...JSON_HEADERS,
      ...headers,
    },
    params,
    responseType: 'blob',
  })
    .then((res) => res)
    .catch((e) => {
      return {
        hasError: true,
        ...e,
      }
    })

  return response
}

export async function put(path, params = {}, data, headers = DEFUALT_AUTH_HEADER) {
  const response = await axios({
    method: 'put',
    url: path,
    params,
    data,
    headers: {
      ...JSON_HEADERS,
      ...headers,
    },
    responseType: 'json',
  })
    .then((res) => res.data)
    .catch((e) => {
      return {
        hasError: true,
        ...e,
      }
    })

  return response
}