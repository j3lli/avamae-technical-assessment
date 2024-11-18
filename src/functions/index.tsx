export const classnames = (...arr: Array<string | boolean | undefined>) => {
    let len = arr.length;
    let classname: string = '';

    arr.forEach((clazz, index) => {
        if (clazz === null) return;
        if (clazz === undefined) return;
        if (typeof clazz === 'boolean') return;
        if (clazz === '') return;

        if (index + 1 === len) {
            classname += `${clazz || ''}`;
            return;
        }
        classname += `${clazz || ''} `;
    });
    return classname;
}