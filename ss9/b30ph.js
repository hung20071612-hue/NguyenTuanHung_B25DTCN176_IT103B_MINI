let orders = [`Đơn hàng A`,`Đơn hàng B`,`Đơn hàng C`,`Đơn hàng D`,`Đơn hàng E`];
let revenues = [1500, 2800, 1200, -500, 3200];
let orderReports = orders.map((value,index) => {
   return value[index] = `${value} mang về ${revenues[index]} USD`
});
console.log(orderReports);
let filters = revenues.filter(value => value > 0);
console.log(filters);
let total = filters.reduce((result,value) => {
    return result + value;
},0)
console.log(total);

