import DataSource from "./DataSource.js";

const getUsers = async () => {
    try {
        let results = await DataSource.getAllData();
        let users = results;
        if(users){
            users.map((user,index) => {
                let {name} = user;
                console.log(name);
            });
        }
    }catch(err){
        console.log(err.message);
    }
}

export {getUsers};