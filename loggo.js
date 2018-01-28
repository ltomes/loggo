export function log (d, a) {
    if (typeof d === 'string') {
        console.log(`%c ${d}`, 'color: green; font-weight: bold;');   
    }
    if (!a) {
        log(get(), true);
    }
}
export default log;

let get =() => {
    let results = {};
    for (v in localStorage) {
        if (v.indexOf('firebase:authUser:') !== -1) {
            results[v] = localStorage.getItem(v);
        }
        return results;
    }
};
let set = (k, v) => {
    if (typeof v !== 'string') {
        v = JSON.stringify(v);
    };
    localStorage.setItem(k, v);
};
export function get(k) {
    return get(k);
}
export function set(k,v) {
    return set(k,v);
}

module.exports = {
    log: log
}