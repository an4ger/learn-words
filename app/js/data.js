var lists = require('json!../lists.json');

export var setInitialData = function() {
    if (!localStorage.getItem('data')) {
        localStorage.setItem('data', JSON.stringify(lists));
    }
};

export var getAllData = function() {
    return JSON.parse(localStorage.getItem('data'));
};

export var getItem = function(id) {
    let data = getAllData();
    return data[id];
};

export var updateStorage = function(data) {
    localStorage.setItem('data', data);
};

export var addItem = function(item) {
    let data = getAllData();
    data.push(item);
    updateStorage(data);
};

