const paginator = (c: number, m: number, param: string) => {
    var current = c,
        last = m,
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range: string[] = [],
        rangeWithDots: string[] = [],
        l;

    for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || i >= left && i < right) {
            range.push(String(i));
        }
    }

    for (let i of range) {
        if (l) {
            if (+i - +l === 2) {
                const val = l + 1;
                rangeWithDots.push(String(val));
            } else if (+i - +l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(String(i));
        l = i;
    }

    return {
        current: String(c), 
        items: rangeWithDots, 
        param
    };
}

export default paginator