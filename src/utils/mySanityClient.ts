// currently just replacing sanity client due to problems with it using cjs modules
// meant for browser but works with astro thanks to it's global fetch

interface Setup {
  projectId: string;
  dataset: string;
  apiVersion: string;
  token?: string; //currently not implemented
  useCdn: boolean;
}

const defaultFetchOptions = {
  mode: 'cors',
  credentials: 'omit',
};

function sanity(setup: Setup) {
  this.setup = setup;
  this.baseUrl = `https://${setup.projectId}.api${
    setup.useCdn ? 'cdn' : ''
  }.sanity.io/v${setup.apiVersion}/data/query/${setup.dataset}?query=`;
}

sanity.prototype.fetch = async function (query) {
  return await this.fetchJson(
    this.baseUrl + encodeURIComponent(query),
    defaultFetchOptions
  );
};

sanity.prototype.fetchJson = async function (url, par) {
  let response;
  try {
    response = await fetch(url, par);
    if (!response.ok) throw Error(response.statusText);
  } catch (error) {
    console.log(error.message);
  }
  const body = await response?.json();
  return body.result;
};

export default sanity;
