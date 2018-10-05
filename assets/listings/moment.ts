const dateMoment1:Moment = moment(date, "DD.MM.YYYY");
const dateMoment2:Moment = moment(date2, "DD.MM.YYYY");
const isBefore:boolean = dateMoment1.isSameOrBefore(dateMoment2);E