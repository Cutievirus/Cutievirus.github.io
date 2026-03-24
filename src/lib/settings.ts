import { days } from '$lib/util/time';

export const cookieLife = days(30).seconds;

const date = new Date();
const month = date.getMonth()+1;
export const events={
  pride:month===6,
}
