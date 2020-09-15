class DataSource {
    static getAllData = () => {
        return fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            return res.json();
        }).then(results => {
            return Promise.resolve(results);
        }).catch(err => {
            return Promise.reject(new Error(err));
        });
    }
}

export default DataSource;