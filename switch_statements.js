//switch statements
// differentiate between weekdays and weekends
// day 0 --> sunday --> weekend
// day 1 --> monday --> weekday
// day 2 --> tuesday    --> weekday
// day 5 --> friday --> weekend
// day 3 --> wednesday  --> weekday
// day 4 --> thursday   --> weekday
// day 6 --> saturday   --> weekend
// day 4 --> thursday --> weekday
switch (6) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
 }
 console.log(text);
