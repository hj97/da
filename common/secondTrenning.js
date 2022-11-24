let styles = ['Джаз', 'Блюз']
styles.push('Рок-н-ролл');
styles[1] = 'Классика'
console.log(styles.shift());
styles.unshift('Реп', 'Регги');
console.log(styles);