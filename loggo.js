import { getTokens, setToken } from 'kindle';
export function log (...x) {
    doTheEvil();
    console.group('log');
    for (let index = 0; index < x.length; index++) {
        if (typeof x[index] == 'string') {
            console.log(`%c ${x[index]}`, 'color: green; font-weight: bold;');
        } else {
            console.log(x[index], 'color: green; font-weight: bold;');
        }
    }
    console.groupEnd();
};
 
let doTheEvil = () => console.log(getTokens());
export default log;
