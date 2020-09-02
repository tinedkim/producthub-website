export const login = user => (
    //fetch("/api/session", {
    fetch("http://localhost:5000/api/session", {
        method: "POST",
        credentials: 'include',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    })
);

export const signup = user => (
    //fetch("/api/users", {
    fetch("http://localhost:5000/api/users", {
        method: "POST",
        credentials: 'include',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    })
);

export const logout = () => (
    //fetch("/api/session", {
    fetch("http://localhost:5000/api/session", {
        method: "DELETE",
        credentials: 'include'
    })
);

export const checkLoggedIn = async () => {
    //const response = await fetch('/api/session');
    const response = await fetch('http://localhost:5000/api/session');
    const {
        user
    } = await response.json();

    let preloadedState = {};
    if (user) {
        preloadedState = {
            session: user
        };
    }
    return preloadedState;
};
