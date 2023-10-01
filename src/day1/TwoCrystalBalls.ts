export default function two_crystal_balls(breaks: boolean[]): number {
    const step = Math.floor(Math.sqrt(breaks.length));
    let len = breaks.length;
    let i;
    for(i = step; i < len; i += step) {
        if(breaks[i] === true) {
            len = i;
            break;
        }
    }

    i = len - step;

    if(i < 0) i = 0;

    for(i; i < len; i++) {
        if(breaks[i] === true) return i;
    }

    return -1;
}