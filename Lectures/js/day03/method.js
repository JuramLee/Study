const printer = {
    incoin: function (coin) {
        console.log(`${coin}이 추가되었습니다`);
    },

    print: () => {
        console.log('복사되었습니다');
    },

    off() {
        console.log('종료되었습니다');
    },
};

printer.incoin(300);
printer.print();
printer.off();
