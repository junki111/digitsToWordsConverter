var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function digitsToWords(amount){
    if((amount = amount.toString()).length > 9) return 'overflow';
    let data = ('000000000' + amount).substr(-9).match(/^(\d{3})(\d{3})(\d{1})(\d{2})$/);
    if(!data) return;
    var str = '';
    //console.log(data[2][1]);
    //console.log(data[2].slice(1,3));
    str += (data[1] != 0) ? (a[Number(data[1])] || a[data[1][0]] + ' hundred and ' + b[data[1][1]] + ' ' + a[data[1].slice(1,3)] || a[data[1][3]]) + 'million ' : '';
    str += (data[2] != 0) ? (a[Number(data[2])] || a[data[2][0]] + ' hundred and ' + b[data[2][1]] + ' ' + a[data[2].slice(2,3)] || a[data[2][3]]) + 'thousand ' : '';
    str += (data[3] != 0) ? (a[Number(data[3])] || b[data[3][0]] + ' ' + a[data[3].slice(1,3)] || a[data[3][3]]) + ' hundred ' : '';
    str += (data[4] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(data[4])] || b[data[4][0]] + ' ' + a[data[4][1]]) + 'only' : '';
    return str;
}

console.log(digitsToWords(412345678));