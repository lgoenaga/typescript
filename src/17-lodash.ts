import _ from 'lodash';

const data = [{username: 'luis', role:'admin'}, 
  {username: 'bar', role:'user'}, 
  {username: 'foo', role:'invited'},
  {username: 'baz', role:'user'},
  {username: 'car', role:'user'},
  {username: 'zar', role:'invited'},
];

const groupedData =_.groupBy(data, item => item.role);
console.log(groupedData);