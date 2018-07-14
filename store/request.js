export default function(url, method = 'GET',  data = {}) {
    const baseUrl = `https://kaza-run.firebaseio.com/${url}.json`;

    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        }
    };

    if (method !== 'GET') {
        options.body = JSON.stringify(data);
    }

    return fetch(baseUrl, options).then(res => res.json());
}