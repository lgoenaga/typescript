import {subDays, format} from 'date-fns';

const date = new Date(1975,8,19);
const newDate = subDays(date, 10);
console.log(format(newDate, 'yyyy-MM-dd'));
