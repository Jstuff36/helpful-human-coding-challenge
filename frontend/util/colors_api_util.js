export const getAllColors = () => {
    return fetch('/api/colors', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const addColor = (color) => {
    return fetch('/api/colors', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            color: color
        })
    });
};


