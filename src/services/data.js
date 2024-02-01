export async function getUsers() {
    return fetch("https://s2grupo-b4529-default-rtdb.europe-west1.firebasedatabase.app/users.json")
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
}
